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
            seasonPrice={room.seasonPrice}
            offSeasonPrice={room.offSeasonPrice}
            reservations={room.reservations}
            id={room.id}
            key={roomId}
            roomsFilter={props.roomsFilter} />
        );
      })}
    </div>
  );
}

RoomsList.propTypes = {
  masterRoomsList: PropTypes.object,
  roomsFilter: PropTypes.object
};

export default RoomsList;
