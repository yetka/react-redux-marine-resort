import React from 'react';
import Header from './Header';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import ReservationRequest from './ReservationRequest';
import PropTypes from 'prop-types';

function Guest(props){
  console.log(props);
  return (
    <div className="container">
      <Header />
      <br></br>
      <RoomsFilter onNewFilterCreation={props.onNewFilterCreation}/>
      <br></br>
      <hr></hr>
      <RoomsList masterRoomsList={props.masterRoomsList} roomsFilter={props.roomsFilter}/>
      <hr></hr>
      <ReservationRequest />
    </div>
  );
}

Guest.propTypes = {
  masterRoomsList: PropTypes.object,
  onNewFilterCreation: PropTypes.func,
  roomsFilter: PropTypes.object
};

export default Guest;
