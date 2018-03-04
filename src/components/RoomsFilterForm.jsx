import React from 'react';

function RoomsFilterForm(){
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-md-3">
            <laber>Number of Guests: </laber>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-md-4">
            <label> From: </label>
            <input
              type='date'
              id='fromDate'
              placeholder='from date'/>
          </div>
          <div className="col-md-4">
            <label> To: </label>
            <input
              type='date'
              id='toDate'
              placeholder='to date'/>
          </div>
          <div className="col-md-1">
            <button type='submit'>Filter!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RoomsFilterForm;
