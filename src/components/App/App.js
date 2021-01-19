import React, { useState, useEffect } from "react";
import "./App.css";
import TasksList from "../TasksList/TasksList";
import AddTask from "../AddTask/AddTask";

const App = () => {
  const dataStored = JSON.parse(localStorage.getItem("dataStored"));

  const [task, setTask] = useState({});
  const [tasksList, setTasksList] = useState(dataStored || []);

  useEffect(() => {
    localStorage.setItem("dataStored", JSON.stringify(tasksList));
  }, [tasksList]);

  const addNewTask = (newTask) => {
    setTask({
      id: Date.now(),
      title: newTask,
      isCompleted: false,
    });
  };

  const updateTasksList = () => {
    setTasksList((prev) => [...prev, task]);
    setTask("");
  };

  const completeTask = (taskId) => {
    setTasksList(
      tasksList.map((taskListItem) => {
        if (taskListItem.id === taskId) {
          return {
            ...taskListItem,
            isCompleted: true,
          };
        }
        return taskListItem;
      })
    );
  };

  const removeTask = (taskId) => {
    const newTasksList = tasksList.filter(
      (taskListItem) => taskListItem.id !== taskId
    );
    setTasksList(newTasksList);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>to-do list</h1>
      </div>
      <TasksList
        tasks={tasksList}
        completeTask={completeTask}
        removeTask={removeTask}
      />
      <AddTask
        task={task}
        addNewTask={addNewTask}
        updateTasksList={updateTasksList}
      />
    </div>
  );
};

export default App;
