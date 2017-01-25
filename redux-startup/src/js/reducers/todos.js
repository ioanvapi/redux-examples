import { TOGGLE_TODO } from '../actions';
import initialState from './initial-state';

const todosReducer = (state=initialState, action) => {
  switch(action.type) {
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign(todo, {completed: !todo.completed})
      });
    default:
      return state;
  }
};

export default todosReducer;
