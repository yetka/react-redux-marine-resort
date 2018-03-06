import React from 'react';
import PropTypes from 'prop-types';

function GuestRequest(props){
  return (
    <div>
      <h2>Request</h2>
      <h5>Room: {props.id}</h5>
      <h5>Date: {props.startDay} - {props.endDay}</h5>
      <h5>Price: {props.totalPrice}</h5>
      <h5>Guest: {props.firstName} {props.lastName}</h5>
      <h5>Phone: {props.phone}</h5>
    </div>
  );
}

GuestRequest.propTypes = {
  roomId: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  startDay: PropTypes.string,
  endDay: PropTypes.string,
  totalPrice: PropTypes.number,
  id: PropTypes.string
}

export default GuestRequest;
