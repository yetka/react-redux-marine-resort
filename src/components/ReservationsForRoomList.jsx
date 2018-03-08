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
              startDay={reservation.id}
              id={reservation.id}
              lastDay={reservation.lastDay}
              lastName={reservation.lastName}
              key={reservation.id}
              onDeleteReservation={props.onDeleteReservation}/>
          );
      })}
    </div>
  );
}

ReservationsForRoomList.propTypes = {
  room: PropTypes.object,
  id: PropTypes.string,
  onDeleteReservation: PropTypes.func
};

export default ReservationsForRoomList;
