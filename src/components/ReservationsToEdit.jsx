import React from 'react';
import PropTypes from 'prop-types';
import ReservationsForRoomList from './ReservationsForRoomList';


class ReservationsToEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationFilter: {roomNumber: null, startDay: null, endDay: null}
    };
    this.handleReservationsFilterFormSubmission=this.handleReservationsFilterFormSubmission.bind(this);
  }

  handleReservationsFilterFormSubmission(event) {
    event.preventDefault();
    let roomNumber = this._roomNumber.value;
    let fromDate =  this._fromDate.value;
    let toDate = this._toDate.value;
    let newReservationFilter = {};
    newReservationFilter['roomNumber'] = roomNumber;
    newReservationFilter['fromDate'] = fromDate;
    newReservationFilter['toDate'] = toDate;
    this.setState({reservationFilter: newReservationFilter});
  }

  render() {
    return (
      <div>
        <form style={{backgroundColor: 'lightGray', padding: '15px', magrin: '15px'}} onSubmit={this.handleReservationsFilterFormSubmission}>
          <div className="row">
            <div className="col-md-3">
              <label>Room number: </label>
              <select ref={(select) => {this._roomNumber = select;}}>
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
                ref={(input) => {this._fromDate = input;}} />
            </div>
            <div className="col-md-4">
              <label> To: </label>
              <input
                type='date'
                id='toDate'
                placeholder='to date'
                ref={(input) => {this._toDate = input;}} />
            </div>
            <div className="col-md-1">
              <button type='submit'>Filter!</button>
            </div>
          </div>
        </form>
        <div>
          <ReservationsForRoomList
            masterRoomsList={this.props.masterRoomsList}
            reservationFilter={this.state.reservationFilter} />
        </div>
      </div>
    );
  }

}

ReservationsToEdit.propTypes = {
  masterRoomsList: PropTypes.object
};

export default ReservationsToEdit;
