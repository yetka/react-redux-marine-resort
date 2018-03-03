import React from 'react';
import { Link } from 'react-router-dom';

function RoomsToEditLinks(){
  return (
    <div>
      <Link to='/admin/rooms-to-edit/room1'>Room 1</Link><br />
      <Link to='/admin/rooms-to-edit/room2'>Room 2</Link><br />
      <Link to='/admin/rooms-to-edit/room3'>Room 3</Link><br />
      <Link to='/admin/rooms-to-edit/room4'>Room 4</Link><br />
      <Link to='/admin/rooms-to-edit/room5'>Room 5</Link><br />
      <Link to='/admin/rooms-to-edit/room6'>Room 6</Link><br />
    </div>
  );
}

export default RoomsToEditLinks;
