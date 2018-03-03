import React from 'react';
import { Link } from 'react-router-dom';

function ReservationsToEditLinks(){
  return (
    <div>
      <Link to='/admin/reservations-to-edit/room1'>Room 1</Link><br />
      <Link to='/admin/reservations-to-edit/room2'>Room 2</Link><br />
      <Link to='/admin/reservations-to-edit/room3'>Room 3</Link><br />
      <Link to='/admin/reservations-to-edit/room4'>Room 4</Link><br />
      <Link to='/admin/reservations-to-edit/room5'>Room 5</Link><br />
      <Link to='/admin/reservations-to-edit/room6'>Room 6</Link><br />
    </div>
  );
}

export default ReservationsToEditLinks;
