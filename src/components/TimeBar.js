import React from "react";
import "../App.css";
const TimeBar = props => {
  return (
    <div className="timeBar">
      {props.times.map(time => {
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
