import React, { Component } from 'react';
import { TodoList } from './todolist';

export default class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handlePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  addNewTodo() {
    const todo = {
      text: this.state.text,
      priority: this.state.priority,
      date: Date.now()
    };
    this.props.handleClick(todo);
    this.setState({
      text: '',
      priority: ''
    });
  }

  render() {
    return (

      <div className='card'>
        <div className='card-header'>
          <h4>Add New Todo</h4>
        </div>
        <div className='card-body'>
          <h4 className='font-weight-light'>I want to...</h4>
          <textarea className='form-control mb-4 create-todo-text' onChange={ this.handleTextChange } value={ this.state.text } />
          <h4 className='font-weight-light'>How much of a priority is this?</h4>
          <select className='form-control create-todo-priority' value={ this.state.priority } onChange={ this.handlePriority }>
            <option value='' defaultValue>Select a Priority</option>
            <option value='1'>Low</option>
            <option value='2'>Medium</option>
            <option value='3'>High</option>
          </select>
        </div>
        <div className='card-footer'>
          <button className='btn btn-block btn-success p-3 create-todo' onClick={ this.addNewTodo }>Add</button>
        </div>
      </div>
    );
  }
}

