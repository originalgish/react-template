import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger }  from 'redux-logger'
import combineReducers from '../reducers/index';

const logger = createLogger({
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  }
});

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(promise, thunk, logger)));

export default store;