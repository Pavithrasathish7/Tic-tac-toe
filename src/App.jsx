import Player from "./component/Player";
import Gameboard from "./component/Gameboard";
import React, { useState } from "react";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./winning";
import Gameover from "./component/Gameover";

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveactive(gameTurns) {
  let currentplayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentplayer = "O";
  }
  return currentplayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activeplayer, setActiveplayer] = useState("X");

  const activeplayer = driveactive(gameTurns);

  let gameBoard = [...initialGame.map((array) => [...array])];
  console.log(gameBoard);
  console.log(...initialGame);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winer;

  for (const combination of WINNING_COMBINATIONS) {
    const firstsquare = gameBoard[combination[0].row][combination[0].column];
    const secondsquare = gameBoard[combination[1].row][combination[1].column];
    const thirdsquare = gameBoard[combination[2].row][combination[2].column];
    if (
      firstsquare &&
      firstsquare === secondsquare &&
      firstsquare === thirdsquare
    ) {
      winer = firstsquare;
      console.log(winer);
    }
  }
  const hasDraw = gameTurns.length === 9 && !winer;

  function clickHandler(rowIndex, colIndex) {
    //setActiveplayer((curactiveplayer) => (curactiveplayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      const currentplayer = driveactive(prevTurn);

      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentplayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }
  function handlereset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activeplayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activeplayer === "O"}
          />
        </ol>
      </div>
      {(winer || hasDraw) && <Gameover winer={winer} onReset={handlereset} />}

      <Gameboard onSelectBoard={clickHandler} board={gameBoard} />

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
