import React from 'react';
import Admin from './Admin';
import Guest from './Guest';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      masterRoomsList: {
        1: {
          name: 'Room1',
          description: 'room description here',
          numberOfGuests: 2,
          seasonPrice: 100,
          offSeasonPrice: 80,
          reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '1'
        },
        2: {
          name: 'Room2',
          description: 'room description here',
          numberOfGuests: 2,
          seasonPrice: 100,
          offSeasonPrice: 80,
          reservations: {'1': {id: '1', firstDay: '2018-08-02', lastDay: '2018-08-12', firstName: 'Sam', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-10-02', lastDay: '2018-10-20', firstName: 'Amanda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '2'
        },
        3: {
          name: 'Room3',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'1': {id: '1', firstDay: '2018-04-02', lastDay: '2018-04-12', firstName: 'Patric', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-06-02', lastDay: '2018-06-20', firstName: 'Emeshea', lastName: 'Doe', phone: '206 123 9876'} },
          id: '3'
        },
        4: {
          name: 'Room4',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'1': {id: '1', firstDay: '2018-05-22', lastDay: '2018-05-30', firstName: 'Viola', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Bob', lastName: 'Doe', phone: '206 123 9876'} },
        },
        5: {
          name: 'Room5',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'1': {id: '1', firstDay: '2018-04-22', lastDay: '2018-05-12', firstName: 'Margaret', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-02-02', lastDay: '2018-02-20', firstName: 'Linda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '5'
        },
        6: {
          name: 'Room6',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'1': {id: '1', firstDay: '2018-05-22', lastDay: '2018-05-30', firstName: 'Robbie', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-07', lastDay: '2018-05-27', firstName: 'Kevin', lastName: 'Doe', phone: '206 123 9876'} },
          id: '6'
        },
        7: {
          name: 'Room7',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-20', firstName: 'Alvaro', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-01-02', lastDay: '2018-01-20', firstName: 'Chris', lastName: 'Doe', phone: '206 123 9876'} },
          id: '7'
        },
        8: {
          name: 'Room8',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'1': {id: '1', firstDay: '2018-09-02', lastDay: '2018-09-12', firstName: 'Kim', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-08-22', lastDay: '2018-09-20', firstName: 'Rico', lastName: 'Doe', phone: '206 123 9876'} },
          id: '8'
        },
        9: {
          name: 'Room9',
          description: 'room description here',
          numberOfGuests: 5,
          seasonPrice: 200,
          offSeasonPrice: 150,
          reservations: {'1': {id: '1', firstDay: '2018-07-02', lastDay: '2018-07-12', firstName: 'Particia', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Josh', lastName: 'Doe', phone: '206 123 9876'} },
          id: '9'
        },
        10: {
          name: 'Room10',
          description: 'room description here',
          numberOfGuests: 5,
          seasonPrice: 200,
          offSeasonPrice: 150,
          reservations: {'1': {id: '1', firstDay: '2018-04-02', lastDay: '2018-04-30', firstName: 'Anna', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-06-04', firstName: 'Travis', lastName: 'Doe', phone: '206 123 9876'} },
          id: '10'
        }
      },
      reservationsRequestsList: {
        123456789: {
          roomId: '5',
          firstName: 'Gosia',
          lastName: 'Haniszewska',
          phone: '206 123 4567',
          startDay: '2018-03-02',
          endDay: '2018-03-03',
          totalPrice: 300,
          id: '123456789'
        },
        987654321: {
          roomId: '2',
          firstName: 'Tomasz',
          lastName: 'Wiszkowski',
          phone: '206 321 4567',
          startDay: '2018-07-02',
          endDay: '2018-07-03',
          totalPrice: 200,
          id: '987654321'
        }
      },
      roomsFilter: {numberOfGuests: null, startDay: null, lastDay: null}
    };
    this.handleNewFilterCreation=this.handleNewFilterCreation.bind(this);
    this.handleNewReservationRequestCreation=this.handleNewReservationRequestCreation.bind(this);
    this.handleDeleteReservationRequest=this.handleDeleteReservationRequest.bind(this);
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

  handleNewReservationRequestCreation(reservation) {
    var newReservationsRequestsList = Object.assign({}, this.state.reservationsRequestsList);
    var newReservationsRequests = {};
    newReservationsRequests['firstName'] = reservation.firstName;
    newReservationsRequests['lastName'] = reservation.lastName;
    newReservationsRequests['phone'] = reservation.phone;
    newReservationsRequests['startDay'] = reservation.startDay;
    newReservationsRequests['endDay'] = reservation.endDay;
    newReservationsRequests['roomId'] = reservation.roomId;
    newReservationsRequests['totalPrice'] = reservation.totalPrice;
    newReservationsRequests['id'] = reservation.id;
    newReservationsRequestsList[reservation.id] = newReservationsRequests;
    this.setState({reservationsRequestsList: newReservationsRequestsList});
  }

  handleDeleteReservationRequest(currentReservationId) {
    var newReservationsRequestsList = {};
    var currentReservationsRequestsList = Object.assign({}, this.state.reservationsRequestsList);
    Object.keys(currentReservationsRequestsList).map(function(reservationId) {
      var reservation = currentReservationsRequestsList[reservationId];
      if (reservationId !== currentReservationId) {
        newReservationsRequestsList[reservationId] = reservation;
      }
    });
    this.setState({reservationsRequestsList: newReservationsRequestsList});
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
    console.log(reservationToEdit);
    var roomWithReservationToEdit = reservationToEdit.roomId;
    var newMasterRoomsList = Object.assign({}, this.state.masterRoomsList);
    Object.keys(newMasterRoomsList).map(function(roomId) {
      var room = newMasterRoomsList[roomId];
      if (room.id == roomWithReservationToEdit) {
        var reservations = room.reservations;
        Object.keys(reservations).map(function(currentReservationId) {
          var reservation = reservations[currentReservationId];
          if (reservation.id === reservationToEdit.reservationToUpdateId) {
            reservation.firstDay = reservationToEdit.firstDay;
            reservation.lastDay = reservationToEdit.lastDay;
            reservation.firstName = reservationToEdit.firstName;
            reservation.lastName = reservationToEdit.lastName;
            reservation.phone = reservationToEdit.phone;
          }
        });
      }
    });
    console.log(newMasterRoomsList);
    this.setState({masterRoomsList: newMasterRoomsList});
  }


  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><Guest
            masterRoomsList={this.state.masterRoomsList}
            onNewFilterCreation={this.handleNewFilterCreation}
            roomsFilter={this.state.roomsFilter}
            onNewReservationRequestCreation={this.handleNewReservationRequestCreation} />} />
          <Route path='/admin' render={()=><Admin
            masterRoomsList={this.state.masterRoomsList}
            reservationsRequestsList={this.state.reservationsRequestsList}
            onDeleteReservationRequest={this.handleDeleteReservationRequest}
            onSubmitReservationRequest={this.handleSubmitReservationRequest}
            onDeleteReservation={this.handleDeleteReservation}
            onReservationEdition={this.handleReservationEdition} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
