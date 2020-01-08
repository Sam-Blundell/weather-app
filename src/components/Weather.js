import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import apiKey from './../key';

class Weather extends React.Component {
  state = {
    placeName: "",
    weathers: []
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ placeName: value });
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=manchester,uk&APPID=${apiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(body => this.setState({ weathers: body.list }));
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.placeName},uk&APPID=${apiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(body => this.setState({ weathers: body.list }));
  };

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Forecast weathers={this.state.weathers} area={this.state.placeName} />
      </div>
    );
  }
}

export default Weather;
