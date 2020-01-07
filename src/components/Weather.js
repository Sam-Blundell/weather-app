import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";

class Weather extends React.Component {
  state = {
    placeName: "",
    weathers: []
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ placeName: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.placeName},uk&APPID=b13ceb6b29996a9c3f2ef083f5778d90`
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
