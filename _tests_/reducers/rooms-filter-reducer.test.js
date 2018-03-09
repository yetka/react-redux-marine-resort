import roomsFilterReducer from './../../src/reducers/rooms-filter-reducer';

describe('roomsFilterReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(roomsFilterReducer({}, { type: null })).toEqual({});
  });

});
