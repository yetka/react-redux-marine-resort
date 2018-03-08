import React from 'react';
import PropTypes from 'prop-types';

function EditReservationButton(props){

  function handleEditReservationButtonClick() {
    props.onEditReservationButtonClick();
  }
  return (
    <div>
      <button onClick={handleEditReservationButtonClick}>Edit!</button>
    </div>
  );
}

EditReservationButton.propTypes = {
  onEditReservationButtonClick: PropTypes.func
};

export default EditReservationButton;
