import React, { Component } from 'react';
import TodoListItem from './todolistitem';

export default class TodoList extends Component {


  render() {
    if (this.props.todos.length === 0) {
      return (
        <div className='card'>
          <div className='card-header'>
            <h4>View Todos</h4>
          </div>
          <div className='card-body list-group-item-info'>
            <p><strong>Welcome to Very Simple Todo App!</strong></p>
            <p>Get started now by adding a new todo on the left.</p>
          </div>
        </div>
      );
    }

    return (
      <div className='card'>
        <div className='card-header'>
          <h4>View Todos</h4>
        </div>
        {
          this.props.todos.map( (todo) =>
            <TodoListItem
              todo={ todo }
              key={ todo.date }
              handleDeleteTodo={ this.props.handleDeleteTodo }
            />)
        }
      </div>
    );
  }
}

