import * as types from '../../reducer-types.js'

const initialState = [{content: 'Analyze requirement', isCompleted: true},
                      {content: 'Design Database', isCompleted: false},
                      {content: 'Choose Framework', isCompleted: true},
                      {content: 'Implement Backend', isCompleted: false},
                      {content: 'Implement Frontend', isCompleted: false}]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO :
      state.push(action.payload)
      let newStateAfterAdd = state.map(s => s)
      return newStateAfterAdd
    case types.TOGGLE_STATUS:
      let todo = action.payload
      todo.isCompleted = !todo.isCompleted
      let newStateAfterToggle = state.map(s => s)
      return newStateAfterToggle
    case types.DELETE_TODO:
      let deleteTodo = action.payload
      state.splice(state.indexOf(deleteTodo), 1)
      let newStateAfterDelete = state.map(s => s)
      return newStateAfterDelete
    case types.CLEAR_COMPLETED_LIST:
      state.forEach(todo => {
        if (todo.isCompleted === true) {
          state.splice(state.indexOf(todo), 1)
        }
      })
      let newStateAfterClear = state.map(s => s)
      return newStateAfterClear
    default:
      return state
  }
}

export default todoReducer
