import React from 'react';
import Header from './Header';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import ReservationRequest from './ReservationRequest';
import PropTypes from 'prop-types';

function Guest(props){
  return (
    <div className="container">
      <Header />
      <RoomsFilter />
      <RoomsList masterRoomsList={props.masterRoomsList}/>
      <hr></hr>
      <ReservationRequest />
    </div>
  );
}

Guest.propTypes = {
  masterRoomsList: PropTypes.object
};

export default Guest;
