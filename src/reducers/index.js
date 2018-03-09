import reservationsRequestsListReducer from './../../src/reducers/reservations-requests-list-reducer';
import roomsListReducer from './../../src/reducers/rooms-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterRoomsList: roomsListReducer,
  reservationsRequestsList: reservationsRequestsListReducer
});

export default rootReducer;
