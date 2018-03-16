import roomsListReducer from './../../src/reducers/rooms-list-reducer';
import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/index';
import * as actions from './../../src/actions';

describe('roomsListReducer', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  it('Should return default state if no action type is recognized', () => {
    expect(roomsListReducer(initialState.masterRoomsList, { type: null })).toEqual(initialState.masterRoomsList);
  });

  it('Should successfully remove reservation data from specified room', () => {
    expect(Object.keys((roomsListReducer(initialState.masterRoomsList, actions.deleteReservation('1', '1')))[1].reservations)).toEqual(['2']);
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


  it('Should successfully add reservation data to a specified room', () => {
    let action = {
      type: 'ADD_RESERVATION',
      reservationRequest: {
        roomId: '5',
        firstName: 'Gosia',
        lastName: 'Haniszewska',
        phone: '206 123 4567',
        firstDay: '2018-03-02',
        lastDay: '2018-03-03',
        totalPrice: 300,
        id: '123456789'
      }

    };
    expect((((roomsListReducer(initialState.masterRoomsList, action))[5]).reservations)[123456789]).toEqual({
      id: '123456789',
      roomId: '5',
      firstName: 'Gosia',
      lastName: 'Haniszewska',
      phone: '206 123 4567',
      firstDay: '2018-03-02',
      lastDay: '2018-03-03',
      totalPrice: 300,
      id: '123456789'
    });
  })
});
