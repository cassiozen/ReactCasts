const login = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => resolve({
      "firstName": "Cássio",
      "lastName": "Antonio",
      "gender": "Male",
      "maritalStatus": "Married",
      "reservation": {
        "startDate": "2017-06-10T12:00",
        "endDate": "2017-06-16T12:00",
        "roomType": "dlxoc",
      }
    }), Math.random() * 100);
  }
);

const fetchRooms = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => resolve([
      {
        id: "stdct",
        name: "City View Standard Room",
        description: "1 Queen bed",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"

      },
      {
        id: "stdoc",
        name: "Ocean View Standard Room",
        description: "1 Queen bed",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"
      },
      {
        id: "dlxct",
        name: "Deluxe Room, City View",
        description: "2 Double beds",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"
      },
      {
        id: "dlxoc",
        name: "Deluxe Room, Ocean View",
        description: "2 Double beds",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"
      },
      {
        id: "gdlux",
        name: "Grand Lux Room, Oceanfront",
        description: "1 King bed and 1 Sofa bed",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"
      },
      {
        id: "royal",
        name: "Royal Suite, Oceanfront",
        description: "2 king beds",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg"
      }
    ]), Math.random() * 100);
  }
)

export default { login, fetchRooms };
