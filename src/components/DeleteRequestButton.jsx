import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function DeleteRequestButton(props){

  // function handleDeleteRequestButtonClick() {
  //   props.onDeleteReservationRequest(props.reservationId);
  // }

  function handleDeleteRequestButtonClick() {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_RESERVATION_REQUEST',
      currentReservationId: props.reservationId
    };
    dispatch(action);
  }

  return (
    <div>
      <button onClick={handleDeleteRequestButtonClick}>Delete</button>
    </div>
  );
}

DeleteRequestButton.propTypes = {
  reservationId: PropTypes.string,
  dispatch: PropTypes.func
  // onDeleteReservationRequest: PropTypes.func
};

export default connect()(DeleteRequestButton);
