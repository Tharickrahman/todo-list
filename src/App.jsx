import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (localStorage.getItem("toDo")) {
      setTodoList(JSON.parse(localStorage.getItem("toDo")));
    }
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("toDo", JSON.stringify(todoList));
    }
  }, [todoList]);

  function handleSumbit(e) {
    e.preventDefault();
    if (newTask.length !== 0) {
      setTodoList((prev) => {
        return [
          ...prev,
          { id: crypto.randomUUID(), title: newTask, completed: false },
        ];
      });
      setNewTask("");
    }
  }

  function toggleComplete(id, isCompleted) {
    const changedList = todoList.map((item) => {
      if (item.id === id) {
        item.completed = isCompleted;
      }
      return item;
    });
    setTodoList(changedList);
  }

  function handleDelete(id) {
    const filteredList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(filteredList);
  }

  return (
    <div className="outerBox">
      <h1>ToDo List</h1>
      <Form
        NewTask={newTask}
        SetNewTask={setNewTask}
        HandleSubmit={handleSumbit}
      />
      <h2>Task List</h2>
      {todoList.length > 0 ? (
        <ul className="taskList">
          {todoList.map((task, ind) => {
            return (
              <Task
                key={ind}
                Id={task.id}
                Completed={task.completed}
                Title={task.title}
                HandleDelete={handleDelete}
                ToggleComplete={toggleComplete}
              />
            );
          })}
        </ul>
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
}
