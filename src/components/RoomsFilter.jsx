import React from 'react';
import RoomsFilterForm from './RoomsFilterForm';
import PropTypes from 'prop-types';

function RoomsFilter(props){
  return (
    <div className="row">
      <div className="col-md-2">
        <h4>Book Now!</h4>
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
