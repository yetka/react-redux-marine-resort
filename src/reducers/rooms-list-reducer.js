import constants from './../constants';

const { initialState, types } = constants;

const roomsListReducer = (state = initialState.masterRoomsList, action) => {
  switch (action.type) {
  // case types.DELETE_RESERVATION: {
  //   const { roomId, reservationId } = action;
  //   let reservationId = action.reservationId;
  //   let roomId = action.roomId;
  //   let newState = {};
  //   let currentReservationsRequestsList = Object.assign({}, state);
  //   console.log(currentReservationsRequestsList);
  //   Object.keys(currentReservationsRequestsList).map(function(reservationId) {
  //     let reservation = currentReservationsRequestsList[reservationId];
  //     if (reservationId !== currentReservationId) {
  //       newState[reservationId] = reservation;
  //     }
  //   });
  //   return newState;
  // }
  default:
    return state;
  }
};

export default roomsListReducer;
