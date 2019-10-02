import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import App from './components/app';
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const rootReducer = combineReducers({

});

// const sagaMiddleware = createSagaMiddleware();

const  store = createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run("sagaName");


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.register();
