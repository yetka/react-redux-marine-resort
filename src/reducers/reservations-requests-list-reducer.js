export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_RESERVATION_REQUEST': {
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
  case 'DELETE_RESERVATION_REQUEST': {
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
