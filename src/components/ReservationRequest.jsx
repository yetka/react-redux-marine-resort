import React from 'react';
import PropTypes from 'prop-types';

function ReservationRequest(props){
  var start = new Date(props.startDay);
  var end = new Date(props.endDay);
  var numberOfDays = ((end - start) / (1000*60*60*24)) + 1;
  var price;




  return (
    <div>
      <h2>Your Reservation</h2>
      <h6>From: {props.startDay} to: {props.endDay}</h6>
      <h5>Total Price: $ {price}</h5>
      <form>
        <input
          type='text'
          id='firstName'
          placeholder='first name'/><br />
        <input
          type='text'
          id='lastName'
          placeholder='last name'/><br />
        <input
          type='text'
          id='phone'
          placeholder='phone number'/><br />
        <button type='submit'>Confirm!</button>
      </form>
    </div>
  );
}

ReservationRequest.propTypes = {
  startDay: PropTypes.string,
  endDay: PropTypes.string
};

export default ReservationRequest;
