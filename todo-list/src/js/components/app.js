import React from 'react';
import TodoAdd from '../containers/todo-add';
import TodoList from '../containers/todo-list';

const App = () => (
  <div className="content">
    <h2>Todo List</h2>
    <TodoAdd />
    <TodoList />
  </div>
);

export default App;