import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SubmitRequestButton(props){

  function handleSubmitRequestButtonClick() {
    const { dispatch } = props;
    const action = {
      type: 'ADD_RESERVATION',
      reservationRequest: props.reservationRequest
    };
    dispatch(action);
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
