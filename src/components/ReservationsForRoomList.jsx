import React from 'react';
import Reservation from './Reservation';
import PropTypes from 'prop-types';

function ReservationsForRoomList(props){
  console.log(props);
  return (
    <div>
      {Object.keys(props.masterRoomsList).map(function(roomId) {
        var room  = props.masterRoomsList[roomId];
        return Object.keys(room.reservations).map(function(resevationId) {
          var reservation = room.reservations[resevationId];
          console.log(reservation.lastName);
          return (
            <Reservation
              startDay={reservation.id}
              lastDay={reservation.lastDay}
              lastName={reservation.lastName}
              key={reservation.id}/>
          );
        })
      })}
    </div>
  );
}

ReservationsForRoomList.propTypes = {
  masterRoomsList: PropTypes.object
};

export default ReservationsForRoomList;
