import constants from './../constants';

const { initialState, types } = constants;

const reservationsRequestsListReducer = (state = initialState.reservationsRequestsList, action) => {
  switch (action.type) {
  case types.ADD_RESERVATION_REQUEST: {
    const { roomId, firstName, lastName, phone, startDay, endDay, totalPrice, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
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
    return newState;
  }
  case types.DELETE_RESERVATION_REQUEST: {
    let currentReservationId = action.currentReservationId;
    let newState = {};
    let currentReservationsRequestsList = Object.assign({}, state);
    console.log(currentReservationsRequestsList);
    Object.keys(currentReservationsRequestsList).map(function(reservationId) {
      let reservation = currentReservationsRequestsList[reservationId];
      if (reservationId !== currentReservationId) {
        newState[reservationId] = reservation;
      }
    });
    return newState;
  }
  default:
    return state;
  }
};

export default reservationsRequestsListReducer;
