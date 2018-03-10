import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SubmitRequestButton(props){

  function handleSubmitRequestButtonClick() {
    const { dispatch } = props;
    const firstAction = {
      type: 'ADD_RESERVATION',
      reservationRequest: props.reservationRequest
    };
    const secondAction = {
      type: 'DELETE_RESERVATION_REQUEST',
      currentReservationRequestId: props.reservationRequest.id
    };
    dispatch(firstAction);
    dispatch(secondAction);
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
