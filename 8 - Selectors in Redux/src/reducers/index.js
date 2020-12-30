import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth';
import rooms from './rooms';

const reducer = combineReducers({
  auth,
  rooms
});

export const selectUserName = (state) => fromAuth.selectUserName(state.auth);

export const selectUserReservation = (state) => state.auth.user.reservation;
export const selectRoomList = (state) => state.rooms.list;
export const selectUserRoom = createSelector(
  selectUserReservation, selectRoomList,
  (userReservation, roomList) => roomList.find(room => room.id === userReservation.roomType)
);

export default reducer;
