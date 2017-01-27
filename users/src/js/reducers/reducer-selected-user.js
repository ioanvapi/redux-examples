
// reducer = a function that takes state and action as arguments, and returns the next state of the app
export default function(state=null, action) {
  switch(action.type) {
    case 'USER_SELECTED':
      return action.payload
  }

  return state;
}