import { observable, decorate, computed } from "mobx";
import { uniqueId } from "lodash";

class TodoStore {
  key = uniqueId()
  title = '';
  isChecked = '';

  constructor({ title, isChecked }) {
    this.title = title;
    this.isChecked = isChecked;
  }

  get description() {
    return `TODO: ${this.title} 
      is ${this.isChecked ? 'done' : 'not done'}`;
  }

  toggle = () => {
    this.isChecked = !this.isChecked;
    console.log('todo.store: ', this.isChecked);
  };
}

export default decorate(TodoStore, {
  title: observable,
  isChecked: observable,
  description: computed,
});