import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer.js';

const store = createStore(combineReducers({todos: todoReducer}), applyMiddleware(logger, thunk));

export default store;
