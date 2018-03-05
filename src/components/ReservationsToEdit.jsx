import React from 'react';
import PropTypes from 'prop-types';
import ReservationsToEditLinks from './ReservationsToEditLinks';
import ReservationsForRoomList from './ReservationsForRoomList';

function ReservationsToEdit(props){
  return (
    <div className="row">
      <div className="col-md-3">
        <ReservationsToEditLinks />
      </div>
      <div className="col-md-9">
        <ReservationsForRoomList masterRoomsList={props.masterRoomsList}/>
      </div>
    </div>
  );
}

ReservationsToEdit.propTypes = {
  masterRoomsList: PropTypes.object
};

export default ReservationsToEdit;
