import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ReservationRequest(props){
  var start = new Date(props.startDay);
  var end = new Date(props.endDay);
  var totalNumberOfDays = ((end - start) / (1000*60*60*24)) + 1;

  var seasonPrice = props.seasonPrice;
  var offSeasonPrice = props.offSeasonPrice;
  var startMonth = parseInt(((props.startDay).split('-'))[1]);
  var startDay = parseInt(((props.startDay).split('-'))[2]);
  var endMonth = parseInt(((props.endDay).split('-'))[1]);
  var endDay = parseInt(((props.endDay).split('-'))[2]);

  var numberOfDaysInSeason = 0;
  // each day in season
  if (((startMonth === 7) && (endMonth === 7)) || ((startMonth === 8) && (endMonth === 8))) {
    numberOfDaysInSeason = (endDay - startDay) + 1;
  }
  // starting at July and and at August
  else if ((startMonth === 7) && (endMonth === 8)) {
    numberOfDaysInSeason = ((31 - startDay) + 1) + endDay;
  }
  //start before season, end in season at July
  else if (endMonth === 7) {
    numberOfDaysInSeason = endDay;
  }
  //start before season, end in season at August
  else if (endMonth === 8) {
    numberOfDaysInSeason = 31 + endDay;
  }
  // start in season at August, end off the season
  else if (startMonth === 8) {
    numberOfDaysInSeason = (31 - startDay) + 1;
  }
  // start in season at July, end off the season
  else if (startMonth === 7) {
    numberOfDaysInSeason = ((31 - startDay) + 1) + 31;
  }

  var numberOfDaysOffSeason = totalNumberOfDays - numberOfDaysInSeason;
  var totalPrice;
  if (numberOfDaysOffSeason === 0) {
    totalPrice = numberOfDaysInSeason * seasonPrice;
  } else if (numberOfDaysInSeason === 0) {
    totalPrice = numberOfDaysOffSeason * offSeasonPrice;
  } else {
    totalPrice = (numberOfDaysInSeason * seasonPrice) + (numberOfDaysOffSeason * offSeasonPrice);
  }

  let _firstName = null;
  let _lastName = null;
  let _phone = null;

  function handleReservationRequestSubmission(event) {
    event.preventDefault();
    var startDay = props.startDay;
    var endDay = props.endDay;
    var roomId = props.roomId;
    props.onNewReservationRequestCreation({firstName: _firstName.value, lastName: _lastName.value, phone: _phone.value, startDay, endDay, roomId, totalPrice, id: v4()});
    props.onConfirmReservationButtonClick();
  }

  return (
    <div>
      <h2>Your Reservation</h2>
      <h6>From: {props.startDay} to: {props.endDay}</h6>
      <h5>Total Price: $ {totalPrice}</h5>
      <form onSubmit={handleReservationRequestSubmission}>
        <input
          type='text'
          id='firstName'
          placeholder='first name'
          ref={(input) => {_firstName = input;}}/><br />
        <input
          type='text'
          id='lastName'
          placeholder='last name'
          ref={(input) => {_lastName = input;}}/><br />
        <input
          type='text'
          id='phone'
          placeholder='phone number'
          ref={(input) => {_phone = input;}}/><br />
        <button type='submit'>Confirm!</button>
      </form>
    </div>
  );
}

ReservationRequest.propTypes = {
  startDay: PropTypes.string,
  endDay: PropTypes.string,
  seasonPrice: PropTypes.number,
  offSeasonPrice: PropTypes.number,
  roomId: PropTypes.string,
  onNewReservationRequestCreation: PropTypes.func,
  onConfirmReservationButtonClick: PropTypes.func
};

export default ReservationRequest;
