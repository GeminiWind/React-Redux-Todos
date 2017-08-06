import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import todoReducer from './reducers/todoReducer.js'

const store = createStore(combineReducers({todos: todoReducer}),applyMiddleware(logger))

export default store