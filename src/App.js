import React, { Component } from 'react';
import './styles/App.css';
import { populateTodos } from './services/todoServices';

class App extends Component {
  componentWillMount() {
    populateTodos();
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
