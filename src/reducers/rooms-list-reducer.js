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

  // case types.ADD_RESERVATION: {
  //   let roomId = action.roomId;
  //   let firstName = action.firstName;
  //   let lastName = action.lastName;
  //   let phone = action.phone;
  //   let startDay = action.startDay;
  //   let endDay = action. '2018-03-03';
  //   let totalPrice = action. 300;
  //   let id = action. '123456789';
  //   let currentRoomId = action.roomId;
  //   let newState = Object.assign({}, state);
  //   Object.keys(newState).map(function(roomId) {
  //     let room = newState[roomId];
  //     if (room.id == currentRoomId) {
  //       let reservations = room.reservations;
  //       let newReservations = {};
  //       Object.keys(reservations).map(function(reservationId) {
  //         let reservation = reservations[reservationId];
  //         if (reservation.id !== currentReservationId) {
  //           newReservations[reservation.id] = reservation;
  //         }
  //       });
  //       room.reservations = newReservations;
  //     }
  //   });
  //   return newState;
  // }

  default:
    return state;
  }
};

export default roomsListReducer;
