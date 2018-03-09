import roomsListReducer from './../../src/reducers/rooms-list-reducer';

describe('roomsListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(roomsListReducer({}, { type: null })).toEqual({});
  });

});
