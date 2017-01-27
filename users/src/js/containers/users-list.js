import React, {Component} from 'react';
import {connect} from 'react-redux';

import UsersListItem from './users-list-item';

class UsersList extends Component {
  render() {
    const items = this.props.users.map(user => (
      <UsersListItem
        key={user.id}
        user={user}
      />
    ));

    return (
      <ul>
        {items}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}



export default connect(mapStateToProps)(UsersList);
