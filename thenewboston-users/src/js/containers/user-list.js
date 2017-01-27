import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions';

class UserList extends Component {

  createListItems() {
    return this.props.users.map(user => (
      <li
        key={user.id}
        onClick={() => this.props.selectUser(user)}
      >
        {user.first} {user.last}
      </li>
    ))
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
