import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = {
      id: this.props.todo.id,
      title: this.title.value,
      description: this.description.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      status: 1
    };
    this.props.action(form);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={(input) => { this.title = input; }}
          defaultValue={this.props.todo.title}
          className="form__text"
        />
        <input
          type="text"
          ref={(input) => { this.description = input; }}
          defaultValue={this.props.todo.description}
          className="form__text"
        />
        <input
          type="date"
          ref={(input) => { this.createdAt = input; }}
          defaultValue={this.props.todo.createdAt}
          className="form__text"
        />
        <input
          type="date"
          ref={(input) => { this.updatedAt = input; }}
          defaultValue={this.props.todo.updatedAt}
          className="form__text"
        />
        <button>Update</button>
      </form>
    );
  }
}

TodoForm.defaultProps = {
  todo: PropTypes.Object,
  action: PropTypes.Function
}

export default TodoForm;
