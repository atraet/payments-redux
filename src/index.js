import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import Thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './payments/components/App.jsx';
import ShopApp from './shop/components/App.jsx';
import reducers from './payments/reducers';

const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/shop" component={ShopApp}/>
        </Router>
    </Provider>
    , document.querySelector('#app'));
