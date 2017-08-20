import React from 'react'
import { connect } from 'react-redux'
import * as todoAction from '../store/actions/todoActions'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

global.jQuery = global.$ = require('jquery')
require('bootstrap')

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.add = this.add.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  componentDidMount () {
    this.setState({newTodo: ''})
  }
  add (event) {
    if (event.key === 'Enter') {
      this.props.addTodo({ content: this.newTodo, isCompleted: false })
      this.newTodo = ''
    }
  }
  handleInputChange (event) {
    this.newTodo = event.target.value
  }
  render () {
    let remain = this.props.todos.filter(e => !e.isCompleted)
    let complete = this.props.todos.filter(e => e.isCompleted)
    return (
        <div className="container-fluid">
            <h1 style={{ textAlign: 'center' }}><strong>todos</strong></h1>
            <input className="form-control" onChange={this.handleInputChange} onKeyPress={this.add}/>
            <h3><i>uncompleted </i><span>({remain.length})</span></h3>
            <ul className="list-group">
                { remain.map((r, i) => (
                    <li className="list-group-item list-group-item-info" key={r.content}>
                    <span>{r.content}</span>
                    <button className="btn btn-default"><span className="glyphicon glyphicon-remove" onClick={() => this.props.deleteRemain(r)}/>
                    </button>
                    <button className="btn btn-default"><span className="glyphicon glyphicon-ok" onClick={() => this.props.toggle(r)}/>
                    </button>
                </li>
                ))
                }
            </ul>
            <p>Start hacking and add some tasks!</p>
            <div>
                <h3><i>completed</i> ({complete.length})</h3>
                <ul className="list-group">
                    {complete.map((c, i) => (
                        <li className="list-group-item list-group-item-success" key={i}>
                        {c.content}
                        <button className="btn btn-default"><i className="fa fa-ban" onClick={() => this.props.toggle(c)}></i>
                        </button>
                    </li>
                    ))
                    }
                </ul>
                <button className="btn btn-danger" onClick={() => this.props.deleteComplete()}>clear <span className="glyphicon glyphicon glyphicon-remove-sign" />
                </button>
            </div>
        </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(todoAction.addTodo(todo)),
    toggle: (todo) => dispatch(todoAction.toggleStatusTodo(todo)),
    deleteRemain: (todo) => dispatch(todoAction.deleteTodo(todo)),
    deleteComplete: () => dispatch(todoAction.clearCompleted())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Todo)
