import React from "react";
import "../Forecast.css";

const Forecast = props => {
  return (
    <div className='weatherGrid'>
      
        {props.weathers.map(weather => {
          return (
            <li className='forecastTime' key={weather.dt}>
             {weather.weather[0].description} 
            </li>
          );
        })}
      
    </div>
  );
};

export default Forecast;
