import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  renderDetails() {
    if (!this.props.user) {
      return (
        <div>Please select an User</div>
      )
    } else {
      const {first, last, age, description} = this.props.user;
      return (
        <div>
          <p><strong>Name:</strong>{first} {last}</p>
          <p><strong>Age:</strong>{age}</p>
          <p><strong>Description:</strong>{description}</p>
        </div>
      )
    }
  }
  render() {

    return (
      <div>
        <h2>User Profile</h2>
        {this.renderDetails()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
