import React from 'react';
import SubmitRequestButton from './SubmitRequestButton';
import DeleteRequestButton from './DeleteRequestButton';
import PropTypes from 'prop-types';

function GuestRequest(props){
  return (
    <div style={{backgroundColor: 'lightGray', margin: '15px', padding: '15px'}} className="row">
      <div className="col-md-8">
        <h2>Request</h2>
        <h5>Room: {props.roomId}</h5>
        <h5>From: {props.firstDay} to: {props.lastDay}</h5>
        <h5>Price: ${props.totalPrice}</h5>
        <h5>Guest: {props.firstName} {props.lastName}</h5>
        <h5>Phone: {props.phone}</h5>
      </div>
      <div className="col-md-4">
        <SubmitRequestButton
          reservationRequest={props.reservationRequest} />
        <DeleteRequestButton
          reservationId={props.id}/>
      </div>
    </div>
  );
}

GuestRequest.propTypes = {
  roomId: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  firstDay: PropTypes.string,
  lastDay: PropTypes.string,
  totalPrice: PropTypes.number,
  id: PropTypes.string,
  reservationRequest: PropTypes.object
};

export default GuestRequest;
