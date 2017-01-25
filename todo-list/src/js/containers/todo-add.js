import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addTodo} from '../actions';

class TodoAdd extends Component {

  state = {value: ''};

  render() {
    return (
      <div className="col-sm-10 todoAdd">
        <form
          className="form-inline"
          onSubmit={e => {
            e.preventDefault();
            this.props.onAdd(this.state.value);
            this.setState({value: ''})
          }}
        >
          <div className="form-group">
            <input
              className="form-control"
              required
              placeholder="Enter some todo here"
              value={this.state.value}
              onChange={e => this.setState({value: e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
      </div>
    )
  }
}

const bindActionsToDispatch = (dispatch) => {
  return bindActionCreators({
    onAdd: addTodo
  }, dispatch)
};

export default connect(null, bindActionsToDispatch)(TodoAdd);

