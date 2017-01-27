
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextId = 0;

//action creator function returns an action
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  }
};


export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};


export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
