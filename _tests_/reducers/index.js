import roomsListReducer from './../../src/reducers/rooms-list-reducer';
import reservationsRequestsListReducer from './../../src/reducers/reservations-requests-list-reducer';
import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/index';

describe("rootReducer", () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({});
  });

});
