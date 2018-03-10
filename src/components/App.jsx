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
  }

  handleNewFilterCreation(newFilter){
    var newRoomsFilter = {};
    newRoomsFilter['numberOfGuests'] = newFilter.numberOfGuests;
    newRoomsFilter['startDay'] = newFilter.fromDate;
    newRoomsFilter['lastDay'] = newFilter.toDate;
    this.setState({roomsFilter: newRoomsFilter});
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
            reservationsRequestsList={this.props.reservationsRequestsList} />} />
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
