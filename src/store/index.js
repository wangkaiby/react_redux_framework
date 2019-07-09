// import { createStore } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

export const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));
 