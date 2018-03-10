import constants from './../constants';

const { initialState, types } = constants;

const roomsListReducer = (state = initialState.masterRoomsList, action) => {
  switch (action.type) {
  case types.DELETE_RESERVATION: {
    let currentReservationId = action.reservationId;
    let currentRoomId = action.roomId;
    let newState = Object.assign({}, state);
    Object.keys(newState).map(function(roomId) {
      let room = newState[roomId];
      if (room.id == currentRoomId) {
        let reservations = room.reservations;
        let newReservations = {};
        Object.keys(reservations).map(function(reservationId) {
          let reservation = reservations[reservationId];
          if (reservation.id !== currentReservationId) {
            newReservations[reservation.id] = reservation;
          }
        });
        room.reservations = newReservations;
      }
    });
    return newState;
  }

  case types.UPDATE_RESERVATION: {
    let firstDay = action.firstDay;
    let lastDay = action.lastDay;
    let firstName = action.firstName;
    let lastName = action.lastName;
    let phone = action.phone;
    let reservationToUpdateId = action.reservationToUpdateId;
    let currentRoomId = action.roomId;
    let newState = Object.assign({}, state);
    Object.keys(newState).map(function(roomId) {
      let room = newState[roomId];
      if (room.id == currentRoomId) {
        let reservations = room.reservations;
        Object.keys(reservations).map(function(reservationId) {
          let reservation = reservations[reservationId];
          if (reservation.id == reservationToUpdateId) {
            if (firstDay.length > 0) {
              reservation.firstDay = firstDay;
            }
            if (lastDay.length > 0) {
              reservation.lastDay = lastDay;
            }
            if (firstName.length > 0) {
              reservation.firstName = firstName;
            }
            if (lastName.length > 0) {
              reservation.lastName = lastName;
            }
            if (phone.length > 0) {
              reservation.phone = phone;
            }
          }
        });
      }
    });
    return newState;
  }

  case types.ADD_RESERVATION: {
    let reservationRequest = action.reservationRequest;
    let currentRoomId = reservationRequest.roomId;
    let firstName = reservationRequest.firstName;
    let lastName = reservationRequest.lastName;
    let phone = reservationRequest.phone;
    let firstDay = reservationRequest.firstDay;
    let lastDay = reservationRequest.lastDay;
    let totalPrice = reservationRequest.totalPrice;
    let id = reservationRequest.id;
    let newState = Object.assign({}, state);
    Object.keys(newState).map(function(roomId) {
      let room = newState[roomId];
      if (room.id == currentRoomId) {
        let reservationToAdd = {};
        reservationToAdd['id'] = id;
        reservationToAdd['firstDay'] = firstDay;
        reservationToAdd['lastDay'] = lastDay;
        reservationToAdd['firstName'] = firstName;
        reservationToAdd['lastName'] = lastName;
        reservationToAdd['phone'] = phone;
        reservationToAdd['totalPrice'] = totalPrice;
        reservationToAdd['roomId'] = roomId;
        room.reservations[reservationToAdd.id] = reservationToAdd;
      }
    });
    return newState;
  }

  default:
    return state;
  }
};

export default roomsListReducer;
