import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import createLogger from 'redux-logger';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import reducers from './reducers';
import App from './components/App.jsx';

const createStoreWithMiddleware = applyMiddleware(Thunk, createLogger())
(() => createStore(reducers, DevTools.instrument()));

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-z" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.querySelector('#app'));
