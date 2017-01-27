import { FETCH_WEATHER } from '../actions';
// reducer = a function that takes state and action as arguments, and returns the next state of the app
 const weather = (state=[], action) => {
  console.log('action:', action);

  switch(action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data]
  }

  return state;
};

export default weather;