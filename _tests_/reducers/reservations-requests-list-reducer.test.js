import reservationsRequestsListReducer from './../../src/reducers/reservations-requests-list-reducer';
import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/index';

describe('reservationsRequestsListReducer', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  it('Should return default state if no action type is recognized', () => {
    expect(reservationsRequestsListReducer(initialState.reservationsRequestsList, { type: null })).toEqual(initialState.reservationsRequestsList);
  });

  it('Should successfully add new reservationRequest data to reservationsRequestsList', () => {
    let action = {
      type: 'ADD_RESERVATION_REQUEST',
      roomId: '1',
      firstName: 'Danuta',
      lastName: 'Haniszewska',
      phone: '206 333 4567',
      firstDay: '2018-03-02',
      lastDay: '2018-03-03',
      totalPrice: 300,
      id: '444444444444'
    };
    expect(reservationsRequestsListReducer(initialState.reservationsRequestsList, action)).toEqual(Object.assign({},initialState.reservationsRequestsList, {
      [444444444444]: {
        roomId: '1',
        firstName: 'Danuta',
        lastName: 'Haniszewska',
        phone: '206 333 4567',
        firstDay: '2018-03-02',
        lastDay: '2018-03-03',
        totalPrice: 300,
        id: '444444444444'
        }
      })
    );
  })

  it('Should successfully remove reservationRequest data from reservationsRequestsList', () => {
    let action = {
      type: 'DELETE_RESERVATION_REQUEST',
      currentReservationRequestId: '987654321'
    };
    expect(Object.keys(reservationsRequestsListReducer(initialState.reservationsRequestsList, action))).toEqual(['123456789']);
  });

});
