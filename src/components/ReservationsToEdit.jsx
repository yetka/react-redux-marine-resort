import React from 'react';
import PropTypes from 'prop-types';
import ReservationsForRoomList from './ReservationsForRoomList';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ReservationsToEdit(props){
  return (
    <div>
      {Object.keys(props.masterRoomsList).map(function(roomId) {
        var room  = props.masterRoomsList[roomId];
        return (
          <div className="row" key={room.id}>
            <div className="col-md-3">
              <Link to={`/admin/reservations-to-edit/${room.id}`}>{room.name}</Link><br/>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route exact path={`/admin/reservations-to-edit/${room.id}`} render={()=><ReservationsForRoomList
                  room={room} />} />
              </Switch>
            </div>
          </div>
        );
      })}
    </div>




  );
}

ReservationsToEdit.propTypes = {
  masterRoomsList: PropTypes.object
};

export default ReservationsToEdit;
