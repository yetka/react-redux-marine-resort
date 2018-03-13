import React from 'react';
import EditReservationButton from './EditReservationButton';
import DeleteReservationButton from './DeleteReservationButton';
import EditReservationForm from './EditReservationForm';
import PropTypes from 'prop-types';

class  Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleEditReservationButtonClick=this.handleEditReservationButtonClick.bind(this);
    this.handleEditReservationFormDoneButtonClick=this.handleEditReservationFormDoneButtonClick.bind(this);
  }

  handleEditReservationButtonClick() {
    this.setState({formVisibleOnPage: true});
  }

  handleEditReservationFormDoneButtonClick() {
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent =
        <div className="col-md-6">
          <EditReservationForm
            roomId={this.props.roomId}
            reservationId={this.props.id}
            onEditReservationFormDoneButtonClick={this.handleEditReservationFormDoneButtonClick} />
        </div>;
    } else {
      currentlyVisibleContent =
        <div className="col-md-6">
          <EditReservationButton onEditReservationButtonClick={this.handleEditReservationButtonClick}/>
          <DeleteReservationButton
            roomId={this.props.roomId}
            reservationId={this.props.id} />
        </div>;
    }

    return (
      <div style={{backgroundColor: 'white', padding: '5px', margin: '5px'}} className="row">
        <div className="col-md-6">
          <h6>Start: {this.props.startDay} End: {this.props.lastDay} Guest: {this.props.firstName} {this.props.lastName}</h6>
        </div>
        {currentlyVisibleContent}
      </div>
    );

  }
}

Reservation.propTypes = {
  roomId: PropTypes.string,
  startDay: PropTypes.string,
  lastDay: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  id: PropTypes.string,
  reservationFilter: PropTypes.object
};

export default Reservation;
