/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ updateTasksList }) => {

  const [task, setTask] = useState({});

  const handleChange = (e) => {
    const newTask = e.target.value;
    !newTask.length || setTask({
      id: Date.now(),
      title: newTask,
      isCompleted: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !task.title || updateTasksList(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        onChange={handleChange}
        value={task.title || ""}
        name="task"
        type="text"
        placeholder="Write a task"
      />
      <div className="btn-container">
        <button type="submit" className="btn-add extended">
          <span className="icon-add">+</span>
          <span className="label-add">ADD TASK</span>
        </button>
      </div>
    </form>
  );
};

export default AddTask;
