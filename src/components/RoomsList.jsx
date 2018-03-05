import React from 'react';
import Room from './Room';
import PropTypes from 'prop-types';

function RoomsList(props){
  var numberOfGuests = props.roomsFilter.numberOfGuests;
  var startDay = props.roomsFilter.startDay;
  var lastDay = props.roomsFilter.lastDay;
  return (
    <div>
      {Object.keys(props.masterRoomsList).map(function(roomId) {
        var room  = props.masterRoomsList[roomId];
        if (room.numberOfGuests == numberOfGuests) {
          return (
            <Room
              name={room.name}
              description={room.description}
              numberOfGuests={room.numberOfGuests}
              id={room.id}
              key={room.id}
              roomsFilter={props.roomsFilter} />
            );
          }
        })}
    </div>
  );
}

RoomsList.propTypes = {
  masterRoomsList: PropTypes.object,
  roomsFilter: PropTypes.object
};

export default RoomsList;
