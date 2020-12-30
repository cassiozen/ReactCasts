import { combineReducers } from 'redux';
import books from './books';
import user from './user';
import cart from './cart';

export default combineReducers({ books, user, cart })
