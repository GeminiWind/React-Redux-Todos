import React from 'react';
import TodoItem from '../TodoItem';
import CompletedItem from '../CompletedItem';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

global.jQuery = global.$ = require('jquery');
require('bootstrap');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.add = this.add.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.setState({ newTodo: '' });
  }

  add (event) {
    if (event.key === 'Enter') {
      this.props.addTodo({ content: this.newTodo, isCompleted: false });
      this.newTodo = '';
    }
  }

  handleInputChange (event) {
    this.newTodo = event.target.value;
  }

  render () {
    let todoItems = this.props.todos.filter(e => !e.isCompleted);
    let completedItems = this.props.todos.filter(e => e.isCompleted);

    return (
      <div className="container-fluid">
        <h1 style={{ textAlign: 'center' }}>
          <strong>To-do List</strong>
        </h1>
        <input className="form-control" onChange={this.handleInputChange} onKeyPress={this.add} />
        <h3>
          <i>uncompleted </i>
          <span>({todoItems.length})</span>
        </h3>
        <ul className="list-group">
          {todoItems.map((todoItem) => (
            <TodoItem
              item={todoItem}
              key={todoItem.content}
              onDone={(item) => this.props.toggle(item)}
              onRemove={(item) => this.props.deleteRemain(item)}
            />
          ))}
        </ul>
        <p>Start hacking and add some tasks!</p>
        <div>
          <h3>
            <i>completed</i>({completedItems.length})
          </h3>
          <ul className="list-group">
            {completedItems.map((completedItem) => (
              <CompletedItem
                item={completedItem}
                key={completedItem.content}
                onUndone={(item) => this.props.toggle(item)}
              />
            ))
            }
          </ul>
          <button className="btn btn-danger" onClick={() => this.props.deleteComplete()}>
            clear <span className="glyphicon glyphicon glyphicon-remove-sign" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
