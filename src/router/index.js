import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home';
import Todos from '../views/Todos';
import ViewTodo from '../views/ViewTodo';
import EditTodo from '../views/EditTodo';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todosAdd" component={Todos} />
          <Route exact path="/todos/:id" component={ViewTodo} />
          <Route exact path="/todos/:id/edit" component={EditTodo} />
          <Route exact path="/todos/:id/delete" component={Todos} />
        </App>
      </Router>
    );
  }
}

export default () => <RouterHandler />;