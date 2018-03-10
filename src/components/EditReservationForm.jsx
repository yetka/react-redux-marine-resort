import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EditReservationForm(props){

  let _firstDay = null;
  let _lastDay = null;
  let _firstName = null;
  let _lastName = null;
  let _phone = null;

  function handleEditReservationFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'UPDATE_RESERVATION',
      firstDay: _firstDay.value,
      lastDay: _lastDay.value,
      firstName: _firstName.value,
      lastName: _lastName.value,
      phone: _phone.value,
      reservationToUpdateId: props.reservationId,
      roomId: props.roomId
    };
    dispatch(action);
    props.onEditReservationFormDoneButtonClick();
  }
  return (
    <div>
      <form onSubmit={handleEditReservationFormSubmission}>
        <label> Start Day: </label>
        <input
          type='date'
          id='fromDate'
          placeholder='from date'
          ref={(input) => {_firstDay = input;}} />
        <label> End Day: </label>
        <input
          type='date'
          id='toDate'
          placeholder='to date'
          ref={(input) => {_lastDay = input;}} />
        <input
          type='text'
          id='firstName'
          placeholder='firstName'
          ref={(input) => {_firstName = input;}} />
        <input
          type='text'
          id='lastName'
          placeholder='lastName'
          ref={(input) => {_lastName = input;}} />
        <input
          type='text'
          id='phone'
          placeholder='phone'
          ref={(input) => {_phone = input;}} />
        <button type='submit'>Done!</button>
      </form>
    </div>
  );
}

EditReservationForm.propTypes={
  roomId: PropTypes.string,
  reservationId: PropTypes.string,
  onEditReservationFormDoneButtonClick: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect()(EditReservationForm);
