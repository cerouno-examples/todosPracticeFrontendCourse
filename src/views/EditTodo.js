import React, { Component } from 'react';
import Section from '../components/Section';
import '../styles/App.css';
import TodoForm from '../components/TodoForm';
import { getTodo, updateTodo } from '../services/todoServices';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: getTodo(this.props.match.params.id)
    };
  }

  update(todo) {
    updateTodo(todo);
    console.log(todo);
  }

  render() {
    return (
      <Section>
        <div>
          <TodoForm
            todo={this.state.todo}
            action={this.update}
          />
        </div>
      </Section>
    );
  }
}

export default EditTodo;
