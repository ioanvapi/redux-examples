import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {deleteTodo, toggleTodo} from '../actions';

const TodoList = ({todos, onDelete, onToggle}) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-10"><strong>Todo</strong></div>
        <div className="col-sm-2"><strong>Action</strong></div>
      </div>
      {todos.map(todo => (
        <div className="row todoRow" key={todo.id}>
          <div className="col-sm-10 todoText"
               onClick={() => onToggle(todo.id)}
          >
              <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
              {todo.text}
              </span>
          </div>
          <div className="col-sm-2"
               onClick={() => onDelete(todo.id)}
          >
            x
          </div>
        </div>
      ))}
    </div>
  )
};

const bindStateToProps = ({todos}) => {
  return {todos}
};

const bindActionToDispatch = (dispatch) => {
  return bindActionCreators({
    onToggle: toggleTodo,
    onDelete: deleteTodo
  }, dispatch)
};

export default connect(bindStateToProps, bindActionToDispatch)(TodoList);


