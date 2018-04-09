import React from 'react';
import PropTypes from 'prop-types';

function RoomsFilterForm(props){
  let _numberOfGuests = null;
  let _fromDate = null;
  let _toDate = null;

  function handleRoomsFilterFormSubmission(event) {
    event.preventDefault();
    if ((new Date(_fromDate.value)) > (new Date(_toDate.value))) {
      alert('Date input is invalid, please try again!');
    } else {
      props.onNewFilterCreation({numberOfGuests: _numberOfGuests.value, fromDate: _fromDate.value, toDate: _toDate.value});
    }
  }

  return (
    <div className="rooms-filter-form">
      <style jsx global>{`
        .rooms-filter-form {
          color: white;
        }   
        .guests {
          float: left;
          padding: 15px;
          text-align: center;
          font-weight: lighter;
          font-style: italic;
        }
        .dates {
          float: left;
          padding: 15px;
          text-align: center;
          font-weight: lighter;
          font-style: italic;
        }
        .availability-button {
          float: left;
          padding: 15px;
          text-align: center;
        }
        .availability-button button {
          background-color: #9FB998;
          font-size: 20px;
          padding: 14px 40px;
          border-radius: 8px;
          margin: 5px;
          border: none;
          color: white;
        }
        .availability-button button:hover {
          background-color: white;
          color: black;
        }
        input {
          width: 130px;
        }
      `}</style>
      <form onSubmit={handleRoomsFilterFormSubmission}>
        
        <div className="guests">
          <label>Number of Guests: </label><br></br>
          <select ref={(select) => {_numberOfGuests = select;}}>
            <option value="2">1-2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="dates">
          <label>Check In: </label><br></br>
          <input
            type='date'
            id='fromDate'
            placeholder='from date'
            ref={(input) => {_fromDate = input;}} />
        </div>
        <div className="dates">
          <label>Check Out: </label><br></br>
          <input
            type='date'
            id='toDate'
            placeholder='to date'
            ref={(input) => {_toDate = input;}} />
        </div>
        <div className="availability-button">
          <button type='submit'>Check Availability!</button>
        </div>
      
      </form>
    </div>
  );
}

RoomsFilterForm.propTypes={
  onNewFilterCreation: PropTypes.func
};

export default RoomsFilterForm;
