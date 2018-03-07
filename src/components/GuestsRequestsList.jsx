import React from 'react';
import GuestRequest from './GuestRequest';
import PropTypes from 'prop-types';

function GuestsRequestsList(props){
  return (
    <div>
      {Object.keys(props.reservationsRequestsList).map(function(reservationRequestId) {
        var reservationRequest  = props.reservationsRequestsList[reservationRequestId];
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
            onDeleteReservationRequest={props.onDeleteReservationRequest}
            onSubmitReservationRequest={props.onSubmitReservationRequest} />
        );
      })}
    </div>
  );
}

GuestsRequestsList.propTypes = {
  reservationsRequestsList: PropTypes.object,
  onDeleteReservationRequest: PropTypes.func,
  onSubmitReservationRequest: PropTypes.func
};

export default GuestsRequestsList;
