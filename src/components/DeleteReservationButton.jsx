import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function DeleteReservationButton(props){

  function handleDeleteReservationButton() {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_RESERVATION',
      reservationId: props.reservationId,
      roomId: props.roomId
    };
    dispatch(action);
  }

  return (
    <div>
      <button onClick={handleDeleteReservationButton}>Delete!</button>
    </div>
  );
}

DeleteReservationButton.propTypes = {
  reservationId: PropTypes.string,
  roomId: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(DeleteReservationButton);
