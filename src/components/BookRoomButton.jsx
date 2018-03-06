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
        roomId={this.props.roomId}
        startDay={this.props.startDay}
        endDay={this.props.endDay}
        seasonPrice={this.props.seasonPrice}
        offSeasonPrice={this.props.offSeasonPrice}/>;
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
  roomId: PropTypes.string
};

export default BookRoomButton;
