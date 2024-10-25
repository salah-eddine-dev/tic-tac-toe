'use client'

import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function Home() {
  const [cells, setCells] = useState(["","","","","","","","",""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("")

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === 'circle')
      const crossWins = combo.every((cell) => cells[cell] === 'cross')

      if (circleWins) {
        setWinningMessage("Circle Win!")
      }else if (crossWins) {
        setWinningMessage("Cross Win!")
      }
    });
  }, [cells])
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Drow!")
    }
  }, [cells])
  
  
  return (
    <div className="container">
      <div className="gameboard">
        {cells.map((cell,index) =>(
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage}/>
        ))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>{`its now ${go} turn!`}</div>}
    </div>
  );
}
