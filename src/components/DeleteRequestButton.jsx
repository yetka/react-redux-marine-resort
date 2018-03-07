import React from 'react';
import PropTypes from 'prop-types';

function DeleteRequestButton(props){
  
  function handleDeleteRequestButtonClick() {
    props.onDeleteReservationRequest(props.reservationId);
  }

  return (
    <div>
      <button onClick={handleDeleteRequestButtonClick}>Delete</button>
    </div>
  );
}

DeleteRequestButton.propTypes = {
  reservationId: PropTypes.string,
  onDeleteReservationRequest: PropTypes.func
};

export default DeleteRequestButton;
