import React from 'react';
import PropTypes from 'prop-types';
import ReservationsForRoomList from './ReservationsForRoomList';


function ReservationsToEdit(props) {
  let _roomNumber = null;
  let _fromDate = null;
  let _toDate = null;

  function handleReservationsFilterFormSubmission(event) {
    event.preventDefault();
    props.onReservationsFilterFormSubmission({roomNumber: _roomNumber.value, fromDate: _fromDate.value, toDate: _toDate.value});

  }


  return (
    <div>
      <form style={{backgroundColor: 'lightGray', padding: '15px', magrin: '15px'}} onSubmit={handleReservationsFilterFormSubmission}>
        <div className="row">
          <div className="col-md-3">
            <label>Room number: </label>
            <select ref={(select) => {_roomNumber = select;}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
      <div>
        <ReservationsForRoomList
          masterRoomsList={props.masterRoomsList}
          reservationFilter={props.reservationFilter} />
      </div>
    </div>
  );
}

ReservationsToEdit.propTypes = {
  masterRoomsList: PropTypes.object,
  reservationFilter: PropTypes.object,
  onReservationsFilterFormSubmission: PropTypes.func
};

export default ReservationsToEdit;
