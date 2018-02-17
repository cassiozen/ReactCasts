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
        description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent conubia per inceptos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R1",
        imageId: 1,
        guests: 2,
      },
      {
        id: "stdoc",
        name: "Ocean View Standard Room",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R2",
        imageId: 2,
        guests: 3,
      },
      {
        id: "dlxct",
        name: "Deluxe Room, City View",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R3",
        imageId: 3,
        guests: 2,
      },
      {
        id: "dlxoc",
        name: "Deluxe Room, Ocean View",
        description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent conubia per inceptos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R4",
        imageId: 4,
        guests: 3,
      },
      {
        id: "gdlux",
        name: "Grand Lux Room, Oceanfront",
        description: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R1",
        imageId: 3,
        guests: 2,
      },
      {
        id: "royal",
        name: "Royal Suite, Oceanfront",
        description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent conubia per inceptos.",
        image: "http://www.hotelroomsearch.net/im/hotels/tr/room-room-hotel-6.jpg",
        imageSmall: "R3",
        imageId: 1,
        guests: 3,
      }
    ]), Math.random() * 100);
  }
)

export default { login, fetchRooms };
