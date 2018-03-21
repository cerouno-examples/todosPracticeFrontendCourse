import React, { Component } from 'react';
import Section from '../components/Section';
import '../styles/App.css';
import TodoCard from '../components/TodoCard';
import { getTodo } from '../services/todoServices';

class ViewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: getTodo(this.props.match.params.id)
    };
  }

  render() {
    return (
      <Section>
        <div>
          <TodoCard todo={this.state.todo} />
        </div>
      </Section>
    );
  }
}

export default ViewTodo;
