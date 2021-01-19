import React from "react";
import "./TasksListDate.css";

const TasksListDate = () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNumber = date.getDate();
  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];

  return (
    <div className="date">
      <div className="month-number">{dayNumber}</div>
      <div>
        <p className="week-day">{weekDay}</p>
        <p className="month">{month}</p>
      </div>
    </div>
  );
};

export default TasksListDate;
