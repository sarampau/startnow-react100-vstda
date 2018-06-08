import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isEditing: false,
      text: props.todo.text,
      priority: props.todo.priority,
      id: props.todo.date
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editText = this.editText.bind(this);
    this.editPriority = this.editPriority.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  handleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  handleEdit() {
    this.setState({
      isEditing: true
    });
  }

  editText(e) {
    this.setState({
      text: e.target.value
    });
  }

  editPriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  editTodo() {
    this.setState({
      isEditing: false
    });
  }


  render() {
    let style = '';
    switch (this.state.priority) {
      case '1' :
        style = 'success';
        break;
      case '2' :
        style = 'warning';
        break;
      case '3' :
        style = 'danger';
        break;
    }

    if (this.state.isEditing) {
      return (
        <div className={ `list-item card-body list-group-item-${style}` }>
          <h4 className='font-weight-light'>Description</h4>
          <textarea className='form-control update-todo-text' onChange={ this.editText }>{ this.state.text }</textarea>
          <h4 className='font-weight-light mt-4'>Priority</h4>
          <select className='form-control update-todo-priority' onChange={ this.editPriority }>
            <option value='' defaultValue>Select a Priority</option>
            <option value='1'>Low</option>
            <option value='2'>Medium</option>
            <option value='3'>High</option>
          </select>
          <button className={ `btn btn-${style} float-right mt-4 update-todo` } onClick={ this.editTodo }>Save</button>
        </div>
      );
    }
    return (
      <div className={ `list-item card-body list-group-item-${style} pl-3 ` } id={ this.state.isChecked ? 'strike-through' : '' }>
        <span>
          <input type='checkbox' onClick={ this.handleCheckbox } />
          {this.state.text}
          <button name={ this.state.id } type='button' className='float-right delete-todo' onClick={ this.props.handleDeleteTodo } >
            <span className='glyphicon glyphicon-trash' />
          </button>
          <button type='button' className='float-right ml-2 edit-todo' onClick={ this.handleEdit }>
            <span className='glyphicon glyphicon-edit' />
          </button>
        </span>
      </div>
    );
  }
}
