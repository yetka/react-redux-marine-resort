import React from 'react';
import RoomsFilterForm from './RoomsFilterForm';
import PropTypes from 'prop-types';

function RoomsFilter(props){
  return (
    <div className="row">
      <style jsx global>{`
        .row {
          background-color: #4D787F;
          padding: 15px;
        }
        
        .filter-header {
          padding-top: 25px;
        }
        .filter-header h1 {
          font-size: 30px;
          font-weight: 600;
        }
      `}</style>
    <div className="col-md-2 filter-header">
        <h1>Book Now!</h1>
      </div>
      <div className="col-md-10">
        <RoomsFilterForm onNewFilterCreation={props.onNewFilterCreation} />
      </div>
    </div>
  );
}

RoomsFilter.propTypes = {
  onNewFilterCreation: PropTypes.func
};

export default RoomsFilter;
