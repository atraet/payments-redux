import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
