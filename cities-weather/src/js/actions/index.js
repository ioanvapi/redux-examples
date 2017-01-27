//http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=373aca183dd8e6ae92d4aab8912c5951
import axios from 'axios';
const API_KEY='373aca183dd8e6ae92d4aab8912c5951';
const API_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator function returns an action
export const fetchWeather = function(city) {
  const url = `${API_URL}&q=${city}`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};
