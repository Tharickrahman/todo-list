import React from "react";

export default function Task(props) {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={props.Completed}
        onChange={(e) => {
          props.ToggleComplete(props.Id, e.target.checked);
        }}
      />
      {props.Completed ? <del>{props.Title}</del> : <p>{props.Title}</p>}
      <button
        onClick={() => {
          props.HandleDelete(props.Id);
        }}
      >
        delete
      </button>
    </li>
  );
}
