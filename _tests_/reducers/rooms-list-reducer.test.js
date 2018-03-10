import roomsListReducer from './../../src/reducers/rooms-list-reducer';
import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/index';

describe('roomsListReducer', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  it('Should return default state if no action type is recognized', () => {
    expect(roomsListReducer(initialState.masterRoomsList, { type: null })).toEqual(initialState.masterRoomsList);
  });

  it('Should successfully remove reservation data from specified room', () => {
    let action = {
      type: 'DELETE_RESERVATION',
      roomId: '1',
      reservationId: '1'
    };
    expect(Object.keys((roomsListReducer(initialState.masterRoomsList, action))[1].reservations)).toEqual(['2']);
  });

  it('Should successfully update reservation data from specified room', () => {
    let action = {
      type: 'UPDATE_RESERVATION',
      reservationToUpdateId: '2',
      firstDay: '2018-05-02',
      lastDay: '2018-06-04',
      firstName: 'Travis',
      lastName: 'Monroe',
      phone: '555 123 9876',
      roomId: '10'
    };
    expect((((roomsListReducer(initialState.masterRoomsList, action))[10]).reservations)[2]).toEqual({
      id: '2',
      firstDay: '2018-05-02',
      lastDay: '2018-06-04',
      firstName: 'Travis',
      lastName: 'Monroe',
      phone: '555 123 9876'
    });
  })
});
