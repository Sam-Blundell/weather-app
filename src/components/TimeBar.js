import React from "react";
import "../App.css";
const TimeBar = props => {
  const times = [
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
    "00:00"
  ]
  return (
    <div className="timeBar">
      {times.map(time => {
        return (
          <li className="timeList" key={time}>
            {time}
          </li>
        );
      })}
    </div>
  );
};

export default TimeBar;
