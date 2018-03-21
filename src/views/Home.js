import React, { Component } from 'react';
import Section from '../components/Section';
import '../styles/App.css';
import TodoCard from '../components/TodoCard';
import { getTodos } from '../services/todoServices';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodos()
    };
  }

  componentDidMount() {
    global.eventHub.addListener('updated', () => {
      this.setState({
        todos: getTodos()
      })
    });
  }

  render() {
    return (
      <Section>
        <p className="title">
          Home
        </p>
        <div>
          {
            this.state.todos.map((todo, i) => {
              return <TodoCard
                todo={todo}
                key={i}
              />
            })
          }
        </div>
      </Section>
    );
  }
}

export default Home;
