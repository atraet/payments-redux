import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import Thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './payments/reducers';
import App from './payments/components/App.jsx';
import ShopApp from './shop/components/App.jsx';
import ShopStep1 from './shop/step1/Index.jsx';
import ShopStep2 from './shop/step2/Index.jsx';
import ShopStep3 from './shop/step3/Index.jsx';

const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/shop" component={ShopApp}>
                <Route path="/shop/step1" component={ShopStep1}/>
                <Route path="/shop/step2" component={ShopStep2}/>
                <Route path="/shop/step3" component={ShopStep3}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app'));
