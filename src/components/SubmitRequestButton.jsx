import React from 'react';
import PropTypes from 'prop-types';

function SubmitRequestButton(props){

  function handleSubmitRequestButtonClick() {
    props.onSubmitReservationRequest(props.reservationId);
  }

  return (
    <div>
      <button onClick={handleSubmitRequestButtonClick}>Submit</button>
    </div>
  );
}

SubmitRequestButton.propTypes = {
  reservationId: PropTypes.string,
  onSubmitReservationRequest: PropTypes.func
};

export default SubmitRequestButton;
