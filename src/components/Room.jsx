import React from 'react';
import BookRoomButton from './BookRoomButton';
import NotAvailableButton from './NotAvailableButton';
import PropTypes from 'prop-types';

function Room(props){
  var filterNumberOfGuests = props.roomsFilter.numberOfGuests;
  var filterStartDay = new Date(props.roomsFilter.startDay);
  var filterEndDay = new Date(props.roomsFilter.lastDay);
  var currentlyDispayedButton = null;
  if (props.numberOfGuests == filterNumberOfGuests) {
    var reservations = [];
    Object.keys(props.reservations).map(function(reservationId) {
      var reservation = props.reservations[reservationId];
      var reservationStartDay = new Date(reservation.firstDay);
      var reservationEndDay = new Date(reservation.lastDay);
      if (((filterStartDay < reservationStartDay) && (filterEndDay < reservationEndDay)) || ((filterStartDay > reservationStartDay) && (filterEndDay > reservationEndDay))) {
        return reservations.push(true);
      } else {
        return reservations.push(false);
      }
    });
    if (reservations.includes(false)) {
      currentlyDispayedButton = <NotAvailableButton />;
    } else {
      currentlyDispayedButton = <BookRoomButton
        startDay={props.roomsFilter.startDay}
        endDay={props.roomsFilter.lastDay}
        seasonPrice={props.seasonPrice}
        offSeasonPrice={props.offSeasonPrice}
        id={props.id} />;
    }
  } else {
    currentlyDispayedButton = <NotAvailableButton />;
  }
  return (
    <div style={{backgroundColor: 'lightGray', margin: '10px', padding: '10px'}} className="row">
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
  id: PropTypes.string,
  description: PropTypes.string,
  numberOfGuests: PropTypes.number,
  reservations: PropTypes.object,
  seasonPrice: PropTypes.number,
  offSeasonPrice: PropTypes.number,
  roomsFilter: PropTypes.object
};

export default Room;
