import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
} from '../actions';

// you must not return the modified current state object (ex. do not use push)
// but a new state that contains the change (use instead concat or [...state, added_object])
const todos = (state=[], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {id: Date.now(), text: action.text, completed: false}];
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return Object.assign(todo, {completed: !todo.completed});
            });
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

export default todos;
