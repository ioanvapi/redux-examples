// a reducer is a function that returns a piece of application state

import {combineReducers} from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-activebook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
