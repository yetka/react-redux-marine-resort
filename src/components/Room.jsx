import React from 'react';
import PropTypes from 'prop-types';

function Room(props){
  return (
    <div>
      <h1>Room: {props.name}</h1>
      <h4>Number of Guests: {props.numberOfGuests}</h4>
      <p>Description: {props.description}</p>
    </div>
  );
}

Room.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  numberOfGuests: PropTypes.number
};

export default Room;
