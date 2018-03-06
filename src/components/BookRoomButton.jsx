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
    this.setState({formVisibleOnPage: true})
  }
  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <ReservationRequest roomName={this.props.roomName} startDay={this.props.startDay} endDay={this.props.endDay}/>
    } else {
      currentlyVisibleContent =
      <div>
        <button onClick={() => {this.handleBookRoomButtonClick();}}>Book!</button>
      </div>
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
  endDay: PropTypes.string
};

export default BookRoomButton;
