import React from 'react';
import EditReservationButton from './EditReservationButton';
import DeleteReservationButton from './DeleteReservationButton';
import PropTypes from 'prop-types';

function Reservation(props){
  console.log(props.roomId);
  return (
    <div style={{backgroundColor: 'white', padding: '5px', margin: '5px'}} className="row">
      <div className="col-md-8">
        <h6>Date: {props.startDay}-{props.lastDay}; {props.lastName}</h6>
      </div>
      <div className="col-md-4">
        <EditReservationButton />
        <DeleteReservationButton
          roomId={props.roomId}
          reservationId={props.id}
          onDeleteReservation={props.onDeleteReservation} />
      </div>
    </div>
  );
}

Reservation.propTypes = {
  roomId: PropTypes.string,
  startDay: PropTypes.string,
  lastDay: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
  onDeleteReservation: PropTypes.func
};

export default Reservation;
