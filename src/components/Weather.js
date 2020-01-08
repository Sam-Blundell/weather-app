import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import apiKey from "./../key";
import axios from "axios";
import "../App.css";
import TimeBar from "./TimeBar";

class Weather extends React.Component {
  state = {
    placeName: "",
    weathers: [],
    city: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ placeName: value });
  };

  getWeather = cityName => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},uk&APPID=${apiKey}`
      )
      .then(res => {
        this.setState({ weathers: res.data.list, city: res.data.city.name });
      });
  };

  componentDidMount() {
    this.getWeather("manchester");
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName } = this.state;
    this.getWeather(placeName);
  };

  render() {
    console.log(this.state);
    return (
      <div id="weatherBox">
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TimeBar times={this.state.times} />
        <Forecast weathers={this.state.weathers} area={this.state.city} />
      </div>
    );
  }
}

export default Weather;
