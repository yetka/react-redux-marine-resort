import React from 'react';
import RoomsFilterForm from './RoomsFilterForm';

function RoomsFilter(){
  return (
    <div className="row">
      <div className="col-md-2">
        <h4>Book Now!</h4>
      </div>
      <div className="col-md-10">
        <RoomsFilterForm />
      </div>
    </div>
  );
}

export default RoomsFilter;
