import React from 'react';
import AdminNavBar from './AdminNavBar';
import GuestsRequestsList from './GuestsRequestsList';
import RoomsToEdit from './RoomsToEdit';
import ReservationsToEdit from './ReservationsToEdit';
import { Switch, Route } from 'react-router-dom';

function Admin(){
  return (
    <div className="row">
      <div className="col-md-3">
        <AdminNavBar />
      </div>
      <div className="col-md-9">
        <Switch>
          <Route path='/admin/guests-requests-list' render={()=><GuestsRequestsList />} />
          <Route path='/admin/rooms-to-edit' render={()=><RoomsToEdit />} />
          <Route path='/admin/ReservationsToEdit' render={()=><ReservationsToEdit />} />
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
