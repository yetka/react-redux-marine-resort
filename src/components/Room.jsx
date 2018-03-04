import React from 'react';
import BookRoomButton from './BookRoomButton';
import NotAvailableButton from './NotAvailableButton';
import PropTypes from 'prop-types';

function Room(props){
  return (
    <div className="row">
      <div className="col-md-8">
        <h3>Room: {props.name}</h3>
        <h5>Number of Guests: {props.numberOfGuests}</h5>
        <p>Description: {props.description}</p>
      </div>
      <div className="col-md-4">
        <BookRoomButton />
        <NotAvailableButton />
      </div>
    </div>
  );
}

Room.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  numberOfGuests: PropTypes.number
};

export default Room;
