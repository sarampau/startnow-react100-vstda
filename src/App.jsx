import React, { Component } from 'react';
import NewTodo from './newtodo';
import TodoList from './todolist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleClick(todo) {
    const todos = this.state.todos.slice();
    todos.push(todo);
    this.setState({
      todos: todos
    });
  }

  handleDeleteTodo(e) {
    const newTodos = [...this.state.todos];
    const id = e.currentTarget.name;
    const index = newTodos.findIndex((todo) => {
      if (todo.date == id) {
        return true;
      }
    });
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-white display-3'>Very Simple Todo App</h1>
        <h3 className='text-white font-weight-light'>Track all the things</h3>
        <hr className='border-white' />
        <div className='row'>
          <div className='col-md-4'>
            <NewTodo
              handleClick={ this.handleClick }
            />
          </div>
          <div className='col-md-8'>
            <TodoList
              todos={ this.state.todos }
              handleDeleteTodo={ this.handleDeleteTodo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
