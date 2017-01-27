import React, {Component} from 'react';
import '../../css/style.css';
import VisibleTodoList from '../containers/visible-todo-list';
import AddTodo from '../containers/add-todo';

class App extends Component {

  render() {
    return (
      <div>
        <h2>Hello World!!</h2>
        <AddTodo />
        <hr/>
        <VisibleTodoList />
      </div>

    )
  }
}

export default App;
