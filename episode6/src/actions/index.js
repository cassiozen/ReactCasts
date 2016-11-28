import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants';

let nextTodoId = 0
export const addTodo = (title) => ({
  type: ADD_TODO,
  id: String(nextTodoId++),
  title
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  shouldConfirm: true,
  id
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
