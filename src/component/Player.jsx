import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playername, setPlayername] = useState(initialName);
  const [isedit, setIsedit] = useState(false);

  function editHandler() {
    setIsedit((editing) => !editing);
  }
  function changeHandler(event) {
    setPlayername(event.target.value);
    console.log(event.target.value);
  }

  let editplayername = <span className="player-name">{playername}</span>;
  if (isedit) {
    editplayername = (
      <input
        type="text"
        required
        value={playername}
        onChange={changeHandler}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editplayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isedit ? "Save" : "Edit"}</button>
    </li>
  );
}
