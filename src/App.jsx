import React, { Component } from 'react';
import TodoList from './components/todo/TodoList.component';
import todos from './config/todos.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <main id="app">
        <TodoList todos={ todos } />
      </main>
    );
  }
}

export default App;
