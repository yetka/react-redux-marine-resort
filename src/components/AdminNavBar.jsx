import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavBar(){
  return (
    <div>
      <Link to='/admin/'>Guest's Request</Link><br />
      <Link to='/admin/rooms-to-edit'>Edit Room</Link><br />
      <Link to='/admin/reservations-to-edit'>Edit Reservation</Link><br />
    </div>
  );
}

export default AdminNavBar;
