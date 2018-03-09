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
        })
        room.reservations = newReservations;
      }
    });
    return newState;
  }
  default:
    return state;
  }
};

export default roomsListReducer;
