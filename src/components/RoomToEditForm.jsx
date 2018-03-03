import React from 'react';

function RoomToEditForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='new room name'/><br />
        <textarea
          type='text'
          id='description'
          placeholder='new room description'/><br />
        <input
          type='text'
          id='numberOfGuests'
          placeholder='number of guests'/><br />
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default RoomToEditForm;
