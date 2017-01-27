import {combineReducers} from 'redux';
import todos from './reducer-todo';
import visibilityFilter from './reducer-filter';


const allReducers = combineReducers({
  todos,
  visibilityFilter
});

export default allReducers;
