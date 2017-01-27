import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectUser} from '../actions';

class UsersListItem extends Component {
  render() {
    return (
      <li onClick={() => this.props.onSelectUser(this.props.user)}>
        {this.props.user.name}
      </li>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({onSelectUser: selectUser}, dispatch)
}

export default connect(state => ({}), mapDispatchToProps)(UsersListItem);
