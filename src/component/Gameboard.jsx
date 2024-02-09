//import React, { useState } from "react";

export default function Gameboard({ onSelectBoard, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGame);

  //   function clickHandler(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updategame = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updategame[rowIndex][colIndex] = activeplayersymbol;
  //       return updategame;
  //     });
  //     onSelectBoard();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectBoard(rowIndex, colIndex)}
                  disabled={playersymbol !== null}
                >
                  {playersymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
