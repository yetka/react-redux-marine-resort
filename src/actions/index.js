import * as types from './../constants/ActionTypes';

export const addReservationRequest = (roomId, firstName, lastName, phone, firstDay, lastDay, totalPrice, id) => ({
  type: types.ADD_RESERVATION_REQUEST,
  roomId,
  firstName,
  lastName,
  phone,
  firstDay,
  lastDay,
  totalPrice,
  id
});

export const deleteReservationRequest = (currentReservationRequestId) => ({
  type: types.DELETE_RESERVATION_REQUEST,
  currentReservationRequestId
});

export const deleteReservation = (roomId, reservationId) => ({
  type: types.DELETE_RESERVATION,
  roomId,
  reservationId
});
