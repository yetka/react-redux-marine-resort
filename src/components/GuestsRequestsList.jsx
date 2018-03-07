import React from 'react';
import GuestRequest from './GuestRequest';
import PropTypes from 'prop-types';

function GuestsRequestsList(props){
  return (
    <div>
      {Object.keys(props.reservationsRequestsList).map(function(reservationRequestId) {
        var reservationRequest  = props.reservationsRequestsList[reservationRequestId];
        console.log(reservationRequest);
        return (
          <GuestRequest
            roomId={reservationRequest.roomId}
            firstName={reservationRequest.firstName}
            lastName={reservationRequest.lastName}
            phone={reservationRequest.phone}
            startDay={reservationRequest.startDay}
            endDay={reservationRequest.endDay}
            totalPrice={reservationRequest.totalPrice}
            id={reservationRequest.id}
            key={reservationRequest.id}
            onDeleteReservationRequest={props.onDeleteReservationRequest} />
        );
      })}
    </div>
  );
}

GuestsRequestsList.propTypes = {
  reservationsRequestsList: PropTypes.object,
  onDeleteReservationRequest: PropTypes.func
};

export default GuestsRequestsList;
