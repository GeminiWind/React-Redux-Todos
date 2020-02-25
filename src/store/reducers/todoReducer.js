import * as types from '../../reducer-types.js';

const initialState = [{content: 'Analyze requirement', isCompleted: true},
  {content: 'Design Database', isCompleted: false},
  {content: 'Choose Framework', isCompleted: true},
  {content: 'Implement Backend', isCompleted: false},
  {content: 'Implement Frontend', isCompleted: false}];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO :
      let newStateAfterAdd = state.slice();
      newStateAfterAdd.splice(state.index, 0, action.payload);
      return newStateAfterAdd;
    case types.TOGGLE_STATUS:
      return state.map(e => {
        if (e === action.payload) {
          e.isCompleted = !e.isCompleted;
        }
        return e;
      });
    case types.DELETE_TODO:
      return state.filter((item) => item !== action.payload);
    case types.CLEAR_COMPLETED_LIST:
      return state.filter((item) => item.isCompleted !== true);
    default:
      return state;
  }
};

export default todoReducer;
