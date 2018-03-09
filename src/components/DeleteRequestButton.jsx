import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function DeleteRequestButton(props){

  function handleDeleteRequestButtonClick() {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_RESERVATION_REQUEST',
      currentReservationRequestId: props.reservationId
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
};

export default connect()(DeleteRequestButton);
