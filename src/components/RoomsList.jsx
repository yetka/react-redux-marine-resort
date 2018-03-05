import React from 'react';
import Room from './Room';
import PropTypes from 'prop-types';

function RoomsList(props){
  var filterNumberOfGuests = props.roomsFilter.numberOfGuests;
  var filterStartDay = new Date(props.roomsFilter.startDay);
  var filterEndDay = new Date(props.roomsFilter.lastDay);
  return (
    <div>
      {Object.keys(props.masterRoomsList).map(function(roomId) {
        var room  = props.masterRoomsList[roomId];
        if (room.numberOfGuests == filterNumberOfGuests) {
          var reservations = [];
          Object.keys(room.reservations).map(function(reservationId) {

            var reservation = room.reservations[reservationId];
            var reservationStartDay = new Date(reservation.id);
            var reservationEndDay = new Date(reservation.lastDay);

            if (((filterStartDay < reservationStartDay) && (filterEndDay < reservationEndDay)) || ((filterStartDay > reservationStartDay) && (filterEndDay > reservationEndDay))) {
              return reservations.push(true);
            } else {
              return reservations.push(false);
            }
          })
          if (!reservations.includes(false)) {
            return (
              <Room
                name={room.name}
                description={room.description}
                numberOfGuests={room.numberOfGuests}
                id={room.id}
                key={room.id}
                roomsFilter={props.roomsFilter} />
            )
          }
        }
    })}
    </div>
  );
}

RoomsList.propTypes = {
  masterRoomsList: PropTypes.object,
  roomsFilter: PropTypes.object
};

export default RoomsList;
