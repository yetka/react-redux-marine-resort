import React from 'react';
import Reservation from './Reservation';
import PropTypes from 'prop-types';

function ReservationsForRoomList(props){
  
  return (
    <div>
      {Object.keys(props.room.reservations).map(function(reservationId) {
        var reservation  = props.room.reservations[reservationId];
        return (
          <Reservation
            roomId={props.room.id}
            startDay={reservation.firstDay}
            id={reservation.id}
            lastDay={reservation.lastDay}
            firstName={reservation.firstName}
            lastName={reservation.lastName}
            key={reservation.id}
            onDeleteReservation={props.onDeleteReservation}
            onReservationEdition={props.onReservationEdition}/>
        );
      })}
    </div>
  );
}

ReservationsForRoomList.propTypes = {
  room: PropTypes.object,
  id: PropTypes.string,
  onDeleteReservation: PropTypes.func,
  onReservationEdition: PropTypes.func,
};

export default ReservationsForRoomList;
