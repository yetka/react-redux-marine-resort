import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteReservationRequest } from './../actions';

function DeleteRequestButton(props){

  function handleDeleteRequestButtonClick() {
    const { dispatch } = props;
    dispatch(deleteReservationRequest(props.reservationId));
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
