import React from 'react';
import BookRoomButton from './BookRoomButton';
import NotAvailableButton from './NotAvailableButton';
import PropTypes from 'prop-types';

function Room(props){
  console.log(props);
  var filterNumberOfGuests = props.roomsFilter.numberOfGuests;
  var filterStartDay = new Date(props.roomsFilter.startDay);
  var filterEndDay = new Date(props.roomsFilter.lastDay);
  var currentlyDispayedButton = null;

  if (props.numberOfGuests == filterNumberOfGuests) {
    var reservations = [];
    Object.keys(props.reservations).map(function(reservationId) {
      var reservation = props.reservations[reservationId];
      var reservationStartDay = new Date(reservation.id);
      var reservationEndDay = new Date(reservation.lastDay);
      if (((filterStartDay < reservationStartDay) && (filterEndDay < reservationEndDay)) || ((filterStartDay > reservationStartDay) && (filterEndDay > reservationEndDay))) {
        return reservations.push(true);
      } else {
        return reservations.push(false);
      }
    })
    if (reservations.includes(false)) {
      currentlyDispayedButton = <NotAvailableButton />
    } else {
      currentlyDispayedButton = <BookRoomButton />
    }
  } else {
    currentlyDispayedButton = <NotAvailableButton />
  }
  return (
    <div className="row">
      <div className="col-md-8">
        <h3>Room: {props.name}</h3>
        <h5>Number of Guests: {props.numberOfGuests}</h5>
        <p>Description: {props.description}</p>
      </div>
      <div className="col-md-4">
        {currentlyDispayedButton}
      </div>
    </div>
  );
}

Room.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  numberOfGuests: PropTypes.number
};

export default Room;
