import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReservation, deleteReservationRequest } from './../actions';

function SubmitRequestButton(props){

  function handleSubmitRequestButtonClick() {
    const { dispatch } = props;
    dispatch(addReservation(props.reservationRequest));
    dispatch(deleteReservationRequest(props.reservationRequest.id));
  }

  return (
    <div>
      <button onClick={handleSubmitRequestButtonClick}>Submit</button>
    </div>
  );
}

SubmitRequestButton.propTypes = {
  reservationRequest: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(SubmitRequestButton);
