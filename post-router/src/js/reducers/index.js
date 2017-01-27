import { combineReducers } from 'redux';
import posts from './reducer_posts';

const allReducers = combineReducers({
  posts,
});

export default allReducers;

