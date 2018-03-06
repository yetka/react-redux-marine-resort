import React from 'react';
import ReservationRequest from './ReservationRequest';
import PropTypes from 'prop-types';

class BookRoomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleBookRoomButtonClick=this.handleBookRoomButtonClick.bind(this);
  }


  handleBookRoomButtonClick() {
    this.setState({formVisibleOnPage: true});
  }
  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <ReservationRequest
        roomId={this.props.id}
        startDay={this.props.startDay}
        endDay={this.props.endDay}
        seasonPrice={this.props.seasonPrice}
        offSeasonPrice={this.props.offSeasonPrice}
        onNewReservationRequestCreation={this.props.onNewReservationRequestCreation}/>;
    } else {
      currentlyVisibleContent =
        <div>
          <button onClick={() => {this.handleBookRoomButtonClick();}}>Book!</button>
        </div>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

BookRoomButton.propTypes = {
  roomName: PropTypes.string,
  startDay: PropTypes.string,
  endDay: PropTypes.string,
  seasonPrice: PropTypes.number,
  offSeasonPrice: PropTypes.number,
  id: PropTypes.string,
  onNewReservationRequestCreation: PropTypes.func
};

export default BookRoomButton;
