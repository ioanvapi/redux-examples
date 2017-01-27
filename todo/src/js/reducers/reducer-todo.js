import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions';

// reducer = a function that takes state and action as arguments, and returns the next state of the app
const todos = (state = [], action) => {

  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo;
        }

        return Object.assign({}, todo, {completed: !todo.completed});
      });
    default:
      return state;
  }
};

export default todos;