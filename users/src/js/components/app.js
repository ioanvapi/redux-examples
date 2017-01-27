import React, {Component} from 'react';
import '../../css/style.css';

import UsersList from '../containers/users-list';
import UserDetails from '../containers/user-details';


class App extends Component {

  render() {
    return (
      <div>
        <h2>Users List</h2>
        <UsersList />
        <hr/>
        <h2>User Details</h2>
        <UserDetails />
      </div>

    )
  }
}

export default App;
