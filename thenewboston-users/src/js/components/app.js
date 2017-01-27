import React from 'react';
import style from '../../css/style.css';

import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const App = () => {
  return (
    <div>
      <h2>Users List</h2>
      <UserList />
      <hr/>
      <UserDetail />
    </div>
  )
}



export default App;
