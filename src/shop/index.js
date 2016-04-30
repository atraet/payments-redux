import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';
import App from './components/App.jsx';

const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/shop" component={App}/>
        </Router>
    </Provider>,
    document.querySelector('#app'));
