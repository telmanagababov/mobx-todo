import { observable, decorate, action, computed } from "mobx";
import TodoStore from "./Todo.store";

class TodoListStore {
  todos = null;

  constructor(todos) {
    this.todos = this.generateTodos(todos);
  }

  get doneTodos() {
    return this.todos.filter(item => item.isChecked).length;
  }

  get leftTodos() {
    return this.todos.filter(item => !item.isChecked).length;
  }

  generateTodos(todos) {
    return todos.map(item => (
      new TodoStore({ 
        title: item.todo,
        isChecked: item.checked,
      })
    ))
  }
}

export default decorate(TodoListStore, {
  todos: observable,
  generateTodos: action,
  doneTodos: computed,
  leftTodos: computed,
});