import {combineReducers} from 'redux';
import weather from './reducer-weather';

const allReducers = combineReducers({
  weather,
  //put other reducers here
});

export default allReducers;
