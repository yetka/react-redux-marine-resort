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
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '1'
        },
        2: {
          name: 'Room2',
          description: 'room description here',
          numberOfGuests: 2,
          reservations: {'2018-03-20': {id: '2018-03-20', lastDay: '2018-03-29', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '2'
        },
        3: {
          name: 'Room3',
          description: 'room description here',
          numberOfGuests: 3,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '3'
        },
        4: {
          name: 'Room4',
          description: 'room description here',
          numberOfGuests: 3,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '4'
        },
        5: {
          name: 'Room5',
          description: 'room description here',
          numberOfGuests: 4,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '5'
        },
        6: {
          name: 'Room6',
          description: 'room description here',
          numberOfGuests: 4,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '6'
        }
      },
      reservationsRequestsList: {
        1: {
          name: 'Room5',
          description: 'room description here',
          numberOfGuests: 5,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-29', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '5'
        },
        2: {
          name: 'Room1',
          description: 'room description here',
          numberOfGuests: 5,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-09-02': {id: '2018-09-02', lastDay: '2018-09-22', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '6'
        }
      },
      roomsFilter: {numberOfGuests: null, startDay: null, lastDay: null}
    };
    this.handleNewFilterCreation=this.handleNewFilterCreation.bind(this);
    this.handleBookRoomButtonClick=this.handleBookRoomButtonClick.bind(this);
  }

  handleNewFilterCreation(newFilter){
    var newRoomsFilter = {};
    newRoomsFilter['numberOfGuests'] = newFilter.numberOfGuests;
    newRoomsFilter['startDay'] = newFilter.fromDate;
    newRoomsFilter['lastDay'] = newFilter.toDate;
    this.setState({roomsFilter: newRoomsFilter});
  }

  handleBookRoomButtonClick(roomId, startDay, endDay) {
    
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><Guest masterRoomsList={this.state.masterRoomsList}
            onNewFilterCreation={this.handleNewFilterCreation}
            roomsFilter={this.state.roomsFilter} onBookRoomButtonClick={this.handleBookRoomButtonClick} />} />
          <Route path='/admin' render={()=><Admin masterRoomsList={this.state.masterRoomsList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
