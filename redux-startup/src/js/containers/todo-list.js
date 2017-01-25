import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { toggleTodo } from '../actions';


const TodoList = ({todos, onToggle}) => {
  return (
    <div>
      {
        todos.map(todo => {
          return (
            <div key={todo.id}>
                <span
                  className="todoItem"
                  style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                  onClick={() => onToggle(todo.id)}
                >
                  {todo.text}
                </span>
            </div>
          )
        })
      }
    </div>
  )
};

const mapStateToProps = ({todos}) => {
  return {todos}
};

const mapActionsToDispatch = (dispatch) => {
  return bindActionCreators({onToggle: toggleTodo}, dispatch)
};

export default connect(mapStateToProps, mapActionsToDispatch)(TodoList);



