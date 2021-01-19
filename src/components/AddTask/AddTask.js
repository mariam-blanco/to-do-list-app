/* eslint-disable no-unused-expressions */
import React from "react";
import "./AddTask.css";

const AddTask = ({ addNewTask, task, updateTasksList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    !task.title || updateTasksList();
  };

  const handleChange = (event) => {
    const newTask = event.target.value;
    !newTask.length || addNewTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        onChange={handleChange}
        value={task.title || ""}
        name="task"
        type="text"
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
