import api from '../api/fakeApi';
import { ROOMS_REQUEST, ROOMS_SUCCESS, ROOMS_FAILURE, ROOM_SELECTION } from '../constants';

function fethingRooms() {
  return {
    type: ROOMS_REQUEST,
  };
}
function roomsSuccess(roomsList) {
  return {
    type: ROOMS_SUCCESS,
    payload: roomsList,
  };
}
function roomsError(error) {
  return {
    type: ROOMS_FAILURE,
    error: 'Failed to fetch rooms',
    payload: error,
  };
}

export function fetchRooms() {
  return (dispatch) => {
    dispatch(fethingRooms());
    return api.fetchRooms()
      .then((rooms) => dispatch(roomsSuccess(rooms)));
  };
}


function RoomSelected(roomId){
  return {
    type: ROOM_SELECTION,
    payload: roomId,
  };
}

export function RoomSelection(roomId) {
  return (dispatch) => {
    dispatch(RoomSelected(roomId));
  };
}