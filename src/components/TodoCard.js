import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import { deleteTodo, completeTodo } from '../services/todoServices';

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
  }

  delete() {
    deleteTodo(this.props.todo.id);
    global.eventHub.emit('updated');
  }

  complete() {
    completeTodo(this.props.todo.id);
    global.eventHub.emit('updated');
  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.props.todo.title}</h3>
          <p>{this.props.todo.description}</p>
          <p>{this.props.todo.createdAt}</p>
          <p>{this.props.todo.updatedAt}</p>
          <p>{this.props.todo.status}</p>
        </div>
        <div>
          <button onClick={this.complete}>Complete</button>
          <Link to={`todos/${this.props.todo.id}`}>View</Link>
          <Link to={`todos/${this.props.todo.id}/edit`}>Edit</Link>
          <button onClick={this.delete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoCard;