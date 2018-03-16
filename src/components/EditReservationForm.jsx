import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateReservation } from './../actions';

function EditReservationForm(props){

  let _firstDay = null;
  let _lastDay = null;
  let _firstName = null;
  let _lastName = null;
  let _phone = null;

  function handleEditReservationFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(updateReservation(
      props.reservationId,
      _firstDay.value,
      _lastDay.value,
      _firstName.value,
      _lastName.value,
      _phone.value,
      props.roomId
    ));
    props.onEditReservationFormDoneButtonClick();
  }
  return (
    <div style={{textAlign: 'right'}}>
      <form onSubmit={handleEditReservationFormSubmission}>
        <label> Start Day: </label>
        <input
          type='date'
          id='fromDate'
          placeholder='from date'
          ref={(input) => {_firstDay = input;}} /><br></br>
        <label> End Day: </label>
        <input
          type='date'
          id='toDate'
          placeholder='to date'
          ref={(input) => {_lastDay = input;}} /><br></br>
        <input
          type='text'
          id='firstName'
          placeholder='firstName'
          ref={(input) => {_firstName = input;}} /><br></br>
        <input
          type='text'
          id='lastName'
          placeholder='lastName'
          ref={(input) => {_lastName = input;}} /><br></br>
        <input
          type='text'
          id='phone'
          placeholder='phone'
          ref={(input) => {_phone = input;}} /><br></br>
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
