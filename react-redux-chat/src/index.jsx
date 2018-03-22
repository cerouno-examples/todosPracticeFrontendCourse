import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App';
import initialState from './initialState';
import logger from './middleware/logger';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('myApp')
);
