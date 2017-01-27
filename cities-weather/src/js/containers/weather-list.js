import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

const WeatherList = (props) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>City</th>
        <th>Temperature (K)</th>
        <th>Pressure (hPa)</th>
        <th>Humidity (%)</th>
      </tr>
      </thead>
      <tbody>
      {props.weather.map(cityData => {
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const press = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;
        //{lat: -25.363882, lng: 131.044922 }

        return (
          <tr key={cityData.city.id}>
            <td><GoogleMap lng={lon} lat={lat}/></td>
            <td><Chart data={temps} color="red" units="K"/></td>
            <td><Chart data={press} color="green" units="hPa"/></td>
            <td><Chart data={humidities} color="orange" units="%"/></td>
          </tr>
        )}
      )}
      </tbody>
    </table>
  )
};

const mapStateToProps = ({weather}) => ({weather});

export default connect(mapStateToProps)(WeatherList);

