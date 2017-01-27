import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Blog</h2>
        {this.props.children}
      </div>
    )
  }
}

/*
const App = (props) => (
  <div>
    <h2>Todo List</h2>
    <TodoList />
    {props.children}
  </div>
);
*/

export default App;