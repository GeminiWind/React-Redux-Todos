import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import * as types from './reducer-types.js'

class App extends Component {
  render() {
    console.log(this.props.todos)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const  mapStatetoProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    addTodo: (todo) => {
      dispatch({
        type: types.ADD_NEW_TODO,
        payload: todo
      })
    }
  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(App);
