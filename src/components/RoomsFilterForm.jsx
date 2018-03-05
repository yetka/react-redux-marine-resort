import React from 'react';
import PropTypes from 'prop-types';

function RoomsFilterForm(props){
  console.log(props);
  let _numberOfGuests = null;
  let _fromDate = null;
  let _toDate = null;

  function handleRoomsFilterFormSubmission(event) {
    event.preventDefault();
    props.onNewFilterCreation({numberOfGuests: _numberOfGuests.value, fromDate: _fromDate.value, toDate: _toDate.value});
  }

  return (
    <div>
      <form onSubmit={handleRoomsFilterFormSubmission}>
        <div className="row">
          <div className="col-md-3">
            <label>Number of Guests: </label>
            <select ref={(select) => {_numberOfGuests = select;}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-md-4">
            <label> From: </label>
            <input
              type='date'
              id='fromDate'
              placeholder='from date'
              ref={(input) => {_fromDate = input;}} />
          </div>
          <div className="col-md-4">
            <label> To: </label>
            <input
              type='date'
              id='toDate'
              placeholder='to date'
              ref={(input) => {_toDate = input;}} />
          </div>
          <div className="col-md-1">
            <button type='submit'>Filter!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

RoomsFilterForm.propTypes={
  onNewFilterCreation: PropTypes.func
};

export default RoomsFilterForm;
