import React from 'react';
import {connect} from 'react-redux';

const UserDetails =  (props) => {
  if (!props.user) {
    return <div>Select an user ...</div>
  }

  return (
    <div>
      <h4>Name: {props.user.name}</h4>
      <h4>Age: {props.user.age}</h4>
      <p><strong>Description:</strong> {props.user.description}</p>
    </div>
  )
};


function mapStateToProps(state) {
  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps)(UserDetails);