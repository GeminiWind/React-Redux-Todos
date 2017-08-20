import * as types from '../../reducer-types.js'

export function addTodo(todo) {
	return (dispatch) => {
		dispatch({
			type: types.ADD_NEW_TODO,
			payload: todo
		})
	}
}

export function toggleStatusTodo(todo) {
	return (dispatch) => {
		dispatch({
			type: types.TOGGLE_STATUS,
			payload: todo
		})
	}
}

export function deleteTodo(todo) {
	return (dispatch) => {
		dispatch({
			type: types.DELETE_TODO,
			payload: todo
		})
	}
}

export function clearCompleted() {
	return (dispatch) => {
		dispatch({
			type: types.CLEAR_COMPLETED_LIST
		})
	}
}