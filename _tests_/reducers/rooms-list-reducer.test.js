import roomsListReducer from './../../src/reducers/rooms-list-reducer';

describe('roomsListReducer', () => {

  let action;
  const sampleRoom = {
    name: 'Room1',
    description: 'room description here',
    numberOfGuests: 2,
    seasonPrice: 100,
    offSeasonPrice: 80,
    reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
    id: '1'
  };

  test('Should return default state if no action type is recognized', () => {
    expect(roomsListReducer({}, { type: null })).toEqual({});
  });

  // test('Should successfully remove reservation data from specified room', () => {
  //   const { name, description, numberOfGuests, seasonPrice, offSeasonPrice, reservations, id } = sampleRoom;
  //   action = {
  //     type: 'ADD_RESERVATION_REQUEST',
  //     roomId: roomId,
  //     reservationId: reservationId
  //   };
  //   expect(reservationsRequestsListReducer({}, action)).toEqual({
  //     [id]: {
  //       name: 'Room1',
  //       description: 'room description here',
  //       numberOfGuests: 2,
  //       seasonPrice: 100,
  //       offSeasonPrice: 80,
  //       reservations: {'2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
  //       id: '1'
  //     }
  //   });
  // });


});
