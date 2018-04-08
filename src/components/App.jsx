import React from 'react';
import Admin from './Admin';
import Guest from './Guest';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomsFilter: {numberOfGuests: null, startDay: null, endDay: null},
      reservationFilter: {roomNumber: null, startDay: null, endDay: null}
    };
    this.handleNewRoomFilterCreation=this.handleNewRoomFilterCreation.bind(this);
    this.handleNewReservationFilterCreation=this.handleNewReservationFilterCreation.bind(this);
  }

  handleNewRoomFilterCreation(newFilter){
    var newRoomsFilter = {};
    newRoomsFilter['numberOfGuests'] = newFilter.numberOfGuests;
    newRoomsFilter['startDay'] = newFilter.fromDate;
    newRoomsFilter['endDay'] = newFilter.toDate;
    this.setState({roomsFilter: newRoomsFilter});
  }

  handleNewReservationFilterCreation(newFilter){
    var newReservationFilter = {};
    newReservationFilter['roomNumber'] = newFilter.roomNumber;
    newReservationFilter['startDay'] = newFilter.fromDate;
    newReservationFilter['endDay'] = newFilter.toDate;
    this.setState({reservationFilter: newReservationFilter});
  }


  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><Guest
            masterRoomsList={this.props.masterRoomsList}
            onNewFilterCreation={this.handleNewRoomFilterCreation}
            roomsFilter={this.state.roomsFilter} />} />
          <Route path='/admin' render={()=><Admin
            masterRoomsList={this.props.masterRoomsList}
            reservationsRequestsList={this.props.reservationsRequestsList}
            reservationFilter={this.state.reservationFilter}
            onReservationsFilterFormSubmission={this.handleNewReservationFilterCreation}
          />} />
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
  reservationsRequestsList: PropTypes.object,
  masterRoomsList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
