import { ROOMS_REQUEST, ROOMS_SUCCESS, ROOM_SELECTION } from '../constants';

const initialState = {
  isFetching: false,
  selectedRoomId: null,
  list: []
}

const rooms = (state = initialState, action) => {
  switch (action.type) {
    case ROOMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
      
    case ROOMS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      }
  
      case ROOM_SELECTION:
      return {
        ...state,
        selectedRoomId: action.payload
      }
    default:
      return state;
  }
};

export default rooms;
