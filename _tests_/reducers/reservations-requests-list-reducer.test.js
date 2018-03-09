import reservationsRequestsListReducer from './../../src/reducers/reservations-requests-list-reducer';

describe('reservationsRequestsListReducer', () => {

  let action;
  const sampleReservationRequest = {
    roomId: '5',
    firstName: 'Gosia',
    lastName: 'Haniszewska',
    phone: '206 123 4567',
    startDay: '2018-03-02',
    endDay: '2018-03-03',
    totalPrice: 300,
    id: '123456789'
  };

  test('Should return default state if no action type is recognized', () => {
    expect(reservationsRequestsListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new reservationRequest data to ReservationsRequestsList', () => {
    const { roomId, firstName, lastName, phone, startDay, endDay, totalPrice, id } = sampleReservationRequest;
    action = {
      type: 'ADD_RESERVATION_REQUEST',
      roomId: roomId,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      startDay: startDay,
      endDay: endDay,
      totalPrice: totalPrice,
      id: id
    };
    expect(reservationsRequestsListReducer({}, action)).toEqual({
      [id] : {
        roomId: roomId,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        startDay: startDay,
        endDay: endDay,
        totalPrice: totalPrice,
        id: id
      }
    });
  });

});
