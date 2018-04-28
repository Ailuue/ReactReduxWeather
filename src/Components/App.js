import React, { Component } from 'react';
import './App.css';
import SearchBar from '../Containers/SearchBar';
import WeatherList from '../Containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
