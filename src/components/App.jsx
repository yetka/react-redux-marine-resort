import React from 'react';
import Admin from './Admin';
import Guest from './Guest';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      roomsFilter: {numberOfGuests: null, startDay: null, lastDay: null}
    };
    this.handleNewFilterCreation=this.handleNewFilterCreation.bind(this);
    // this.handleDeleteReservationRequest=this.handleDeleteReservationRequest.bind(this);
    this.handleSubmitReservationRequest=this.handleSubmitReservationRequest.bind(this);
    this.handleDeleteReservation=this.handleDeleteReservation.bind(this);
    this.handleReservationEdition=this.handleReservationEdition.bind(this);
  }

  handleNewFilterCreation(newFilter){
    var newRoomsFilter = {};
    newRoomsFilter['numberOfGuests'] = newFilter.numberOfGuests;
    newRoomsFilter['startDay'] = newFilter.fromDate;
    newRoomsFilter['lastDay'] = newFilter.toDate;
    this.setState({roomsFilter: newRoomsFilter});
  }

  handleSubmitReservationRequest(currentReservationId) {
    var currentReservationsRequestsList = Object.assign({}, this.state.reservationsRequestsList);
    var reservationToAdd = {};
    Object.keys(currentReservationsRequestsList).map(function(reservationId) {
      var reservation = currentReservationsRequestsList[reservationId];
      if (reservationId === currentReservationId) {
        reservationToAdd['id'] =  reservation.id;
        reservationToAdd['firstDay'] =  reservation.startDay;
        reservationToAdd['lastDay'] =  reservation.endDay;
        reservationToAdd['firstName'] =  reservation.firstName;
        reservationToAdd['lastName'] =  reservation.lastName;
        reservationToAdd['phone'] =  reservation.phone;
        reservationToAdd['totalPrice'] =  reservation.totalPrice;
        reservationToAdd['roomId'] =  reservation.roomId;
      }
    });
    var newMasterRoomsList = Object.assign({}, this.state.masterRoomsList);
    Object.keys(newMasterRoomsList).map(function(roomId) {
      var room = newMasterRoomsList[roomId];
      if (room.id === reservationToAdd.roomId) {
        room.reservations[reservationToAdd.id] = reservationToAdd;
      }
    });
    this.setState({masterRoomsList: newMasterRoomsList});
    this.handleDeleteReservationRequest(currentReservationId);
  }

  handleDeleteReservation(currentReservationInfo) {
    var currentReservationId = currentReservationInfo.reservationId;
    var currentRoomId = currentReservationInfo.roomId;
    var newMasterRoomsList = Object.assign({}, this.state.masterRoomsList);
    Object.keys(newMasterRoomsList).map(function(roomId) {
      var room = newMasterRoomsList[roomId];
      if (room.id === currentRoomId) {
        var reservations = room.reservations;
        var newReservations = {};
        Object.keys(reservations).map(function(reservationId) {
          var reservation = reservations[reservationId];

          if (reservation.id !== currentReservationId) {
            newReservations[reservationId] = reservation;
          }
          return newReservations;
        });
        room.reservations = newReservations;
      }
    });
    this.setState({masterRoomsList: newMasterRoomsList});
  }

  handleReservationEdition(reservationToEdit) {
    var roomWithReservationToEdit = reservationToEdit.roomId;
    var newMasterRoomsList = Object.assign({}, this.state.masterRoomsList);
    Object.keys(newMasterRoomsList).map(function(roomId) {
      var room = newMasterRoomsList[roomId];
      if (room.id == roomWithReservationToEdit) {
        var reservations = room.reservations;
        Object.keys(reservations).map(function(currentReservationId) {
          var reservation = reservations[currentReservationId];
          if (reservation.id === reservationToEdit.reservationToUpdateId) {
            if (reservationToEdit.firstDay.length > 0) {
              reservation.firstDay = reservationToEdit.firstDay;
            }
            if (reservationToEdit.lastDay.length > 0) {
              reservation.lastDay = reservationToEdit.lastDay;
            }
            if (reservationToEdit.firstName.length > 0) {
              reservation.firstName = reservationToEdit.firstName;
            }
            if (reservationToEdit.lastName.length > 0) {
              reservation.lastName = reservationToEdit.lastName;
            }
            if (reservationToEdit.phone.length > 0) {
              reservation.phone = reservationToEdit.phone;
            }
          }
        });
      }
    });
    this.setState({masterRoomsList: newMasterRoomsList});
  }


  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><Guest
            masterRoomsList={this.props.masterRoomsList}
            onNewFilterCreation={this.handleNewFilterCreation}
            roomsFilter={this.state.roomsFilter} />} />
          <Route path='/admin' render={()=><Admin
            masterRoomsList={this.props.masterRoomsList}
            reservationsRequestsList={this.props.reservationsRequestsList}
            onSubmitReservationRequest={this.handleSubmitReservationRequest}
            onDeleteReservation={this.handleDeleteReservation}
            onReservationEdition={this.handleReservationEdition} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reservationsRequestsList: state.reservationsRequestsList,
    masterRoomsList: state.masterRoomsList
  };
};

App.propTypes = {
  reservationsRequestsList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
