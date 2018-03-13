import React from 'react';
import AdminNavBar from './AdminNavBar';
import GuestsRequestsList from './GuestsRequestsList';
import ReservationsToEdit from './ReservationsToEdit';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


function Admin(props){

  return (
    <div className="row">
      <div style={{backgroundColor: 'black', padding: '20px'}} className="col-md-2">
        <AdminNavBar />
      </div>
      <div className="col-md-10">
        <Switch>
          <Route exact path='/admin/' render={()=><GuestsRequestsList reservationsRequestsList={props.reservationsRequestsList} />} />
          <Route path='/admin/reservations-to-edit' render={()=><ReservationsToEdit
            masterRoomsList={props.masterRoomsList}
            reservationFilter={props.reservationFilter}
            onReservationsFilterFormSubmission={props.onReservationsFilterFormSubmission} />} />
        </Switch>
      </div>
    </div>
  );
}

Admin.propTypes = {
  masterRoomsList: PropTypes.object,
  reservationsRequestsList: PropTypes.object,
  reservationFilter: PropTypes.object,
  onReservationsFilterFormSubmission: PropTypes.func
};

export default Admin;
