import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteReservation } from './../actions';

function DeleteReservationButton(props){

  function handleDeleteReservationButton() {
    const { dispatch } = props;
    dispatch(deleteReservation(props.roomId, props.reservationId));
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
