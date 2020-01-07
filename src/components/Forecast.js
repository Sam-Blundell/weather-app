import React from 'react';

const Forecast = (props) => {
  console.log(props.weathers)
  return (
    <div>
      <ul>
        {props.weathers.map(weather => {
          return <li key={weather.dt}>at {weather.dt_txt} it will be {weather.weather[0].description} in {props.area}</li>
        })}
      </ul>
    </div>
  );
};

export default Forecast;