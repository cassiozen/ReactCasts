import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth';
import rooms from './rooms';
import filter from './filter';
import {ALL, ROOMS, SUITES} from '../constants/filter-constants';
const reducer = combineReducers({
  auth,
  rooms,
  filter
});

debugger;
export const selectUserName = (state) => fromAuth.selectUserName(state.auth);

export const selectUserReservation = (state) => state.auth.user.reservation || {};
export const selectRoomList = (state) => state.rooms.list;
export const selectUserRoom = createSelector(
  selectUserReservation, selectRoomList,
  (userReservation, roomList) => roomList.find(room => room.id === userReservation.roomType)
);

export const selectedFilter = (state) => state.filter;
export const selectFilteredRoom = createSelector(
  selectRoomList, selectedFilter,
  (roomList, filter) =>{
    switch (filter) {
      case ALL:
        return roomList
      case ROOMS:
        return roomList.filter(f=> f.roomType === "ROOM")
      case SUITES:
        return roomList.filter(f => f.roomType === "SUITES")
    }
  }
);
export default reducer;
