import {combineReducers} from 'redux';
import UsersReducer from './reducer-users';
import SelectedUserReducer from './reducer-selected-user';

const allReducers = combineReducers({
  users: UsersReducer,
  selectedUser: SelectedUserReducer
});


export default allReducers;
