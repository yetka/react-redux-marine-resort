import React from 'react';

function ReservationRequest(){
  return (
    <div>
      <h2>Your Reservation</h2>
      <h4>Room:</h4>
      <h4>Date:</h4>
      <h4>Price:</h4>
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

export default ReservationRequest;
