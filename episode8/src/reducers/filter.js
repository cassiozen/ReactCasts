import { ALL } from '../constants/filter-constants';

export default function filter(state = ALL, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}