import React from 'react';

function RoomsFilterForm(){
  return (
    <div>
      <form>
        <laber>Number of Guests: </laber>
        <label> 1 </label>
        <input type="radio" name="numberOfGuests" value="1" />
        <label> 2 </label>
        <input type="radio" name="numberOfGuests" value="2" />
        <label> 3 </label>
        <input type="radio" name="numberOfGuests" value="3" />
        <label> 4 </label>
        <input type="radio" name="numberOfGuests" value="4" />
        <label> 5 </label>
        <input type="radio" name="numberOfGuests" value="5" />
        <label> From: </label>
        <input
          type='date'
          id='fromDate'
          placeholder='from date'/>
        <label> To: </label>
        <input
          type='date'
          id='toDate'
          placeholder='to date'/>
        <button type='submit'>Filter!</button>
      </form>
    </div>
  );
}

export default RoomsFilterForm;
