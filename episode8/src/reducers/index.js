import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth';
import rooms from './rooms';
import filter from './filter';
import sort from './sort';

import { ALL, ROOMS, SUITES } from '../constants/filter-constants';
import { NONE, ROOM, GUESTS } from '../constants/sort-constants';

const reducer = combineReducers({
  auth,
  rooms,
  filter,
  sort
});


export const selectUserName = (state) => fromAuth.selectUserName(state.auth);

export const selectUserReservation = (state) => state.auth.user.reservation || {};
export const selectRoomList = (state) => state.rooms.list;
export const selectUserRoom = createSelector(
  selectUserReservation, selectRoomList,
  (userReservation, roomList) => roomList.find(room => room.id === userReservation.roomType)
);


/**Filter selectors */
export const selectedFilter = (state) => state.filter;
export const selectFilteredRoom = createSelector(
  selectRoomList, selectedFilter,
  (roomList, filter) => {
    switch (filter) {
      case ALL:
        return roomList
      case ROOMS:
        return roomList.filter(f => f.roomType === "ROOM")
      case SUITES:
        return roomList.filter(f => f.roomType === "SUITES")
    }
  }
);

/**Filter and Sort >>> selectors */
export const selectedSort = (state) => state.sort;
export const selectRoomByFilterAndSort = createSelector(
  selectFilteredRoom, selectedSort,
  (roomList, sortBy) => {
    switch (sortBy) {
      case NONE:
        let sortResult1 = roomList.sort(function (a, b) { return 0.5 - Math.random() })
        return sortResult1;
      case ROOM:
        let sortResult2 = roomList.sort(function (a, b) {
          var x = a.roomType.toLowerCase();
          var y = b.roomType.toLowerCase();
          if (x < y) { return -1 };
          if (x > y) { return 1 };
          return 0;
        })
        return sortResult2;
      case GUESTS:
        let sortResult3 = roomList.sort(function (a, b) {
          return (a.guests - b.guests);
        });
        return sortResult3;
    }
  }
)


/** Selector as Functions 
 *  Running it as brand new selector as function with out the above functions**/
export const makeUniqueRoomId = (state, RoomId) => RoomId;
export const makeSelectRoomByFilterAndSort = () => {
  return createSelector(
   [selectRoomList, makeUniqueRoomId],
   (roomList, id) => {
    return roomList.find(f => f.imageId === id);
   } 
  )
}

export default reducer;
