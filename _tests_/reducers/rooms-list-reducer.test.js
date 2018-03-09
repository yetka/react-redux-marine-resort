import roomsListReducer from './../../src/reducers/rooms-list-reducer';
import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/index';

describe('roomsListReducer', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  // let action;
  // const sampleRoom = {
  //   name: 'Room1',
  //   description: 'room description here',
  //   numberOfGuests: 2,
  //   seasonPrice: 100,
  //   offSeasonPrice: 80,
  //   reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
  //   id: '1'
  // };

  it('Should return default state if no action type is recognized', () => {
    expect(roomsListReducer(initialState.masterRoomsList, { type: null })).toEqual(initialState.masterRoomsList);
  });

  test('Should successfully remove reservation data from specified room', () => {
    // const { name, description, numberOfGuests, seasonPrice, offSeasonPrice, reservations, id } = sampleRoom;
    let action = {
      type: 'DELETE_RESERVATION',
      roomId: '1',
      reservationId: '1'
    };
    expect(Object.keys((roomsListReducer(initialState.masterRoomsList, action))[1].reservations)).toEqual(['2']);
  });


});
