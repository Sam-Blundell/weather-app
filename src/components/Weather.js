import React from 'react';
import Search from './Search';

class Weather extends React.Component {
  state = {
    placeName: ''
  }

  getPlaceName = (formName) => {
    this.setState({ placeName: formName });
  }

  render() {
    return (
      <Search />
    )
  }



}

export default Weather;