import constants from './../constants';

const { initialState, types } = constants;

const reservationsRequestsListReducer = (state = initialState.reservationsRequestsList, action) => {
  switch (action.type) {
  case types.ADD_RESERVATION_REQUEST: {
    const { roomId, firstName, lastName, phone, firstDay, lastDay, totalPrice, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        roomId: roomId,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        firstDay: firstDay,
        lastDay: lastDay,
        totalPrice: totalPrice,
        id: id
      }
    });
    return newState;
  }
  case types.DELETE_RESERVATION_REQUEST: {
    let currentReservationRequestId = action.currentReservationRequestId;
    let newState = {};
    let currentReservationsRequestsList = Object.assign({}, state);
    Object.keys(currentReservationsRequestsList).map(function(reservationId) {
      let reservation = currentReservationsRequestsList[reservationId];
      if (reservationId !== currentReservationRequestId) {
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
