import React from "react";

export default function Form(props) {
  return (
    <form className="form">
      <label htmlFor="newTask">NewTask</label>
      <div>
        <input
          type="text"
          value={props.NewTask}
          onChange={(e) => {
            props.SetNewTask(e.target.value);
          }}
          id="newTask"
        />
        <button onClick={props.HandleSubmit}>Add</button>
      </div>
    </form>
  );
}
