import React from "react";
import TasksListDate from "../TasksListDate/TasksListDate";
import Task from "../Task/Task";
import "./TasksList.css";

const TasksList = ({ tasks, completeTask, removeTask }) => (
  <div className="todo-list">
    <TasksListDate />
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isCompleted={task.isCompleted}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  </div>
);

export default TasksList;
