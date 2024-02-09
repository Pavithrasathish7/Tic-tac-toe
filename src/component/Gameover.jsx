import React from "react";

export default function Gameover({ winer, onReset }) {
  return (
    <div id="game-over">
      <h1>Game Over</h1>
      {winer && <p>winer is {winer}</p>}
      {!winer && <p>Draw aakichi </p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
}
