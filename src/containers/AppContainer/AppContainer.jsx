
import { connect } from 'react-redux';
import * as todoAction from '../../store/actions/todoActions';
import App from '../../components/App';

const mapStatetoProps = (state) => {
  return {
    todos: state.todos
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(todoAction.addTodo(todo)),
    toggle: (todo) => dispatch(todoAction.toggleStatusTodo(todo)),
    deleteRemain: (todo) => dispatch(todoAction.deleteTodo(todo)),
    deleteComplete: () => dispatch(todoAction.clearCompleted())
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);

