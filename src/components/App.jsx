import React from 'react';
import Header from './Header';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Reservation from './Reservation';

function App(){
  return (
    <div className="container">
      <Header />
      <RoomsFilter />
      <RoomsList />
      <Reservation />
    </div>
  );
}

export default App;
