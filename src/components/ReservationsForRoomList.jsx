import React from 'react';
import Reservation from './Reservation';
import PropTypes from 'prop-types';

function ReservationsForRoomList(props){
  if (props.reservationFilter.roomNumber) {
    return (
      <div>
        {Object.keys(props.masterRoomsList).map(function(roomId) {
          let room = props.masterRoomsList[roomId];
          return (
            Object.keys(room.reservations).map(function(reservationId) {
              var reservation = room.reservations[reservationId];
              let filterRoomNumber = props.reservationFilter.roomNumber;
              let filterStartDay = new Date(props.reservationFilter.startDay);
              let filterEndDay = new Date(props.reservationFilter.endDay);
              let roomNumber = room.id;
              let reservationStartDay = new Date(reservation.firstDay);
              let reservationEndDay = new Date(reservation.lastDay);
              if (roomNumber == filterRoomNumber) {

                if (((filterStartDay >= reservationStartDay) && (filterStartDay <= reservationEndDay)) || ((filterEndDay >= reservationStartDay) && (filterEndDay <= reservationEndDay)) || ((filterStartDay <= reservationStartDay) && (filterEndDay >= reservationEndDay))) {
                  return (
                    <Reservation
                      roomId={room.id}
                      startDay={reservation.firstDay}
                      id={reservation.id}
                      lastDay={reservation.lastDay}
                      firstName={reservation.firstName}
                      lastName={reservation.lastName}
                      phone={reservation.phone}
                      reservationFilter={props.reservationFilter}
                      key={reservation.id} />
                  );
                }
              }
            })
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>To see reservations please submit the form above</p>
      </div>
    );
  }


}

ReservationsForRoomList.propTypes = {
  masterRoomsList: PropTypes.object,
  reservationFilter: PropTypes.object
};

export default ReservationsForRoomList;
