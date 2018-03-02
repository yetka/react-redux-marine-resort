import React from 'react';
import Room from './Room';
import PropTypes from 'prop-types';

function RoomsList(props){
  return (
    <div>
      {Object.keys(props.masterRoomsList).map(function(roomId) {
        var room  = props.masterRoomsList[roomId];
        return (
          <Room
            name={room.name}
            description={room.description}
            numberOfGuests={room.numberOfGuests}
            id={room.id}
            key={room.id} />
        );
      })}
    </div>
  );
}

RoomsList.propTypes = {
  masterRoomsList: PropTypes.object
};

export default RoomsList;
