import React from 'react';
import Header from './Header';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import PropTypes from 'prop-types';

function Guest(props){

  return (
    <div className="container">
      <Header />
      <br></br>
      <RoomsFilter onNewFilterCreation={props.onNewFilterCreation}/>
      <br></br>
      <hr></hr>
      <RoomsList
        masterRoomsList={props.masterRoomsList}
        roomsFilter={props.roomsFilter}
        onNewReservationRequestCreation={props.onNewReservationRequestCreation} />
    </div>
  );
}

Guest.propTypes = {
  masterRoomsList: PropTypes.object,
  onNewFilterCreation: PropTypes.func,
  roomsFilter: PropTypes.object,
  onNewReservationRequestCreation: PropTypes.func
};

export default Guest;
