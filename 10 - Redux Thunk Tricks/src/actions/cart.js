import { ADDED_TO_CART } from '../constants';

const added = id => ({ type: ADDED_TO_CART, payload: id });

export const addToCart = (bookId) => (
  (dispatch, getState, api) => {
    const user = getState().user;
    if(user){
      api.addToCart(bookId)
        .then(dispatch(added(bookId)));
    }
  }
);
