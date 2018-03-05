import React from 'react';
import EditReservationButton from './EditReservationButton';
import DeleteReservationButton from './DeleteReservationButton';
import PropTypes from 'prop-types';

function Reservation(props){
  console.log(props);
  return (
    <div className="row">
      <div className="col-md-6">
        <h6>Date: {props.startDay}-{props.lastDay}; {props.lastName}</h6>
      </div>
      <div className="col-md-2">
        <EditReservationButton />
        <DeleteReservationButton />
      </div>
    </div>
  );
}

Reservation.propTypes = {
  lastName: PropTypes.string,
};

export default Reservation;
