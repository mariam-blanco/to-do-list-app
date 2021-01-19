/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Task.css";

const Task = ({ id, title, isCompleted, completeTask, removeTask }) => {
  const handleComplete = (taskId) => {
    completeTask(taskId);
  };

  const handleRemove = (taskId) => {
    removeTask(taskId);
  };

  const removeBtn = (
    <button
      onClick={() => handleRemove(id)}
      className="btn-delete-task"
      type="button"
    >
      &times;
    </button>
  );

  return (
    <li className={`todo-list-item${isCompleted ? " completed" : ""}`}>
      <span
        onClick={() => handleComplete(id)}
        className={`icon ${isCompleted ? "far fa-check-circle" : ""}`}
      />
      <p className="task">{title}</p>
      {isCompleted && removeBtn}
    </li>
  );
};

export default Task;
