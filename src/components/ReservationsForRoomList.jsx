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
              startDay={reservation.id}
              lastDay={reservation.lastDay}
              lastName={reservation.lastName}
              key={reservation.id}/>
          );
      })}
    </div>
  );
}

ReservationsForRoomList.propTypes = {
  room: PropTypes.object
};

export default ReservationsForRoomList;
