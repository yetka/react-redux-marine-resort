import React from 'react';
import RoomsToEditLinks from './RoomsToEditLinks';
import Room from './Room';
import RoomToEditForm from './RoomToEditForm';

function RoomsToEdit(){
  return (
    <div className="row">
      <div className="col-md-3">
        <RoomsToEditLinks />
      </div>
      <div className="col-md-9">
        <Room />
        <RoomToEditForm />
      </div>
    </div>
  );
}

export default RoomsToEdit;
