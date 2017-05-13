import { BOOK_SUCCESS, SIMILAR_SUCCESS } from '../constants';

export default (state = { selectedBook: {}, similar: [] }, action) => {
  switch (action.type) {
    case BOOK_SUCCESS:
      return { selectedBook: action.payload, similar: [] };

    case SIMILAR_SUCCESS:
      return {...state, similar: action.payload };

    default:
      return state;
  }
}
