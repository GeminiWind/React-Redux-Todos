import * as types from '../../reducer-types.js';

const initialState = {todos: [{content: 'Analyze requirement', isCompleted: true},
	        {content: 'Design Database', isCompleted: false},
	        {content: 'Choose Framework', isCompleted: true},
	        {content: 'Implement Backend', isCompleted: false},
	        {content: 'Implement Frontend', isCompleted: false},] }

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_NEW_TODO :
			state.todos.push(action.payload)
			break;
		case types.TOGGLE_STATUS:
			let todo = action.payload
			todo.isCompleted = !todo.isCompleted
			break;
		case types.DELETE_TODO:
			let deleteTodo = action.payload
			state.todos.splice(state.todos.indexOf(deleteTodo),1)
			break;
		case types.CLEAR_COMPLETED_LIST:
			state.todos.forEach(todo => {
				if (todo.isCompleted === true )
					state.todos.splice(state.todos.indexOf(todo),1)
			})
			break
		default:
      		return state
	}
}

export default todoReducer