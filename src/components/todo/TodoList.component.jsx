import { string, bool, arrayOf, shape } from 'prop-types';
import React, { Component } from 'react';
import Todo from './Todo.component';
import TodoListStore from './TodoList.store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.listStore = new TodoListStore(props.todos);
  }

  render() {
    return (
      this.renderTodos()
    );
  }

  renderTodos() {
    const { todos } = this.listStore;
    return todos.map(item => (
      <Todo
        store={ item }
        key={ item.key }
      />
    ))
  }
}

TodoList.propTypes = {
  todos: arrayOf(shape({
    todo: string,
    checked: bool,
  })).isRequired,
}

export default TodoList;
