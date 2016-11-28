import { FETCH_TODO, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        title: action.title,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }

    case REMOVE_TODO:
      return state.id !== action.id;

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODO:
      return action.payload;
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    case REMOVE_TODO:
      return state.filter(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
