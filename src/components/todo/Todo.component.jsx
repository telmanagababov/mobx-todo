import React, { Component } from 'react';
import { string, bool, shape, func } from 'prop-types';
import { noop } from 'lodash';
import './Todo.component.css';

class Todo extends Component {
  render() {
    const { title, isChecked, toggle } = this.props.store;

    console.log('todo.component: ', title, isChecked);

    return (
      <div className="todo" onClick={ toggle }>
        <span className="label">
          { title }
        </span>
        <input className="checkbox" 
          type="checkbox" 
          checked={ isChecked } 
          onChange={ noop }
        />
      </div>
    );
  }
}

Todo.propTypes = {
  store: shape({
    title: string,
    isChecked: bool,
    toggle: func,
  }).isRequired
}

export default Todo;
