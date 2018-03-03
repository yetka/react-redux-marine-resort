import React from 'react';
import EditReservationButton from './EditReservationButton';
import DeleteReservationButton from './DeleteReservationButton';

function Reservation(){
  return (
    <div className="row">
      <div className="col-md-8">
        <h6>Reservation date, Guest's last name</h6>
      </div>
      <div className="col-md-6">
        <EditReservationButton />
        <DeleteReservationButton />
      </div>
    </div>
  );
}

export default Reservation;
