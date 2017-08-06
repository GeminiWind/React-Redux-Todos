import * as types from '../../reducer-types.js'

export function addTodo({dispatch}, todo) {
	dispatch({
		type: types.ADD_NEW_TODO,
		payload: todo
	})
}

export function toggleStatus({dispatch}, todo) {
	dispatch({
		type: types.TOGGLE_STATUS,
		payload: todo
	})
}

export function deleteTodo({dispatch}, todo) {
	dispatch({
		type: types.DELETE_TODO,
		payload: todo
	})
}

export function clearCompleted({dispatch}) {
	dispatch({
		type: types.CLEAR_COMPLETED_LIST
	})
}