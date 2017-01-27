import React, {Component} from 'react';
import '../../css/style.css';
import SearchBar from '../containers/search-bar'
import WeatherList from '../containers/weather-list';

class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>

    )
  }
}

export default App;
