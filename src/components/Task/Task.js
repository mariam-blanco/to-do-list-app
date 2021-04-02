/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Task.css";

const Task = ({ task, completeTask, removeTask }) => {

  const handleComplete = (taskId) => {
    completeTask(taskId);
  };

  const handleRemove = (taskId) => {
    removeTask(taskId);
  };

  const removeBtn = (
    <button
      onClick={() => handleRemove(task.id)}
      className="btn-delete-task"
      type="button"
    >
      &times;
    </button>
  );

  return (
    <li className={`todo-list-item${task.isCompleted ? " completed" : ""}`}>
      <span
        onClick={() => handleComplete(task.id)}
        className={`icon ${task.isCompleted ? "far fa-check-circle" : ""}`}
      />
      <p className="task">{task.title}</p>
      {task.isCompleted && removeBtn}
    </li>
  );
};

export default Task;
