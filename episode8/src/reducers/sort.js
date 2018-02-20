import { NONE } from '../constants/sort-constants';

export default function sort(state = NONE, action) {
  switch (action.type) {
    case 'SET_SORT':
      return action.sortBy
    default:
      return state
  }
}