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
            firstDay={reservationRequest.firstDay}
            lastDay={reservationRequest.lastDay}
            totalPrice={reservationRequest.totalPrice}
            id={reservationRequest.id}
            key={reservationRequest.id}
            reservationRequest={reservationRequest} />
        );
      })}
    </div>
  );
}

GuestsRequestsList.propTypes = {
  reservationsRequestsList: PropTypes.object
};

export default GuestsRequestsList;
