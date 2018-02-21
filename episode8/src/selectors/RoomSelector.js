import { createSelector } from 'reselect';
import _ from 'lodash';

const Rooms = (state) => state.rooms.list;

/**Selector By ID */
const selectedRoomId = (state, itemId) => itemId;
export const SelectRoomById = createSelector(
    Rooms, selectedRoomId,
    (roomList, id) => {
        let roomInfo = { roomInfo: roomList.find(f => f.id === id) };
        let UUID = { uuid: generateUUID() }; /**Expensive computation */
        return Object.assign({}, roomInfo, UUID);
    }
)


/***Selector as function */
export const makeGetRoomById = () => {
    return createSelector(
        [Rooms, selectedRoomId],
        (roomList, id) => {
            let roomInfo = { roomInfo: roomList.find(f => f.id === id) };
            let UUID = { uuid: generateUUID() }; /**Expensive computation */
            return Object.assign({}, roomInfo, UUID);
        }
    )
}



function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
