import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';

import createLogger from 'redux-logger';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import reducers from './reducers';
import App from './components/App.jsx';

// const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())
// const createStoreWithMiddleware = applyMiddleware(Thunk)
// (() => createStore(reducers, DevTools.instrument()));

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

var configStore = function configureStore(initialState) {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(Thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-z" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);

ReactDOM.render(
    <Provider store={configStore()}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={App}/>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.querySelector('#app'));
