import { ADDED_TO_CART } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}
