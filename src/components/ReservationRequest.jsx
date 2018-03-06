import React from 'react';
import PropTypes from 'prop-types';

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




  return (
    <div>
      <h2>Your Reservation</h2>
      <h6>From: {props.startDay} to: {props.endDay}</h6>
      <h5>Total Price: $ {totalPrice}</h5>
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
