import React from 'react';
import PropTypes from 'prop-types';

function DeleteReservationButton(props){
  console.log(props.roomId)
  function handleDeleteReservationButton() {
    props.onDeleteReservation({reservationId: props.reservationId, roomId: props.roomId});
  }

  return (
    <div>
      <button onClick={handleDeleteReservationButton}>Delete!</button>
    </div>
  );
}

DeleteReservationButton.propTypes = {
  reservationId: PropTypes.string,
  onDeleteReservation: PropTypes.func,
  roomId: PropTypes.string
};

export default DeleteReservationButton;
