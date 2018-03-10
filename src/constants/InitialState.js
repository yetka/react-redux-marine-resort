export const initialState = {
  masterRoomsList: {
    1: {
      name: 'Room1',
      description: 'room description here',
      numberOfGuests: 2,
      seasonPrice: 100,
      offSeasonPrice: 80,
      reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
      id: '1'
    },
    2: {
      name: 'Room2',
      description: 'room description here',
      numberOfGuests: 2,
      seasonPrice: 100,
      offSeasonPrice: 80,
      reservations: {'1': {id: '1', firstDay: '2018-08-02', lastDay: '2018-08-12', firstName: 'Sam', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-10-02', lastDay: '2018-10-20', firstName: 'Amanda', lastName: 'Doe', phone: '206 123 9876'} },
      id: '2'
    },
    3: {
      name: 'Room3',
      description: 'room description here',
      numberOfGuests: 3,
      seasonPrice: 130,
      offSeasonPrice: 100,
      reservations: {'1': {id: '1', firstDay: '2018-04-02', lastDay: '2018-04-12', firstName: 'Patric', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-06-02', lastDay: '2018-06-20', firstName: 'Emeshea', lastName: 'Doe', phone: '206 123 9876'} },
      id: '3'
    },
    4: {
      name: 'Room4',
      description: 'room description here',
      numberOfGuests: 3,
      seasonPrice: 130,
      offSeasonPrice: 100,
      reservations: {'1': {id: '1', firstDay: '2018-05-22', lastDay: '2018-05-30', firstName: 'Viola', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Bob', lastName: 'Doe', phone: '206 123 9876'} },
    },
    5: {
      name: 'Room5',
      description: 'room description here',
      numberOfGuests: 3,
      seasonPrice: 130,
      offSeasonPrice: 100,
      reservations: {'1': {id: '1', firstDay: '2018-04-22', lastDay: '2018-05-12', firstName: 'Margaret', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-02-02', lastDay: '2018-02-20', firstName: 'Linda', lastName: 'Doe', phone: '206 123 9876'} },
      id: '5'
    },
    6: {
      name: 'Room6',
      description: 'room description here',
      numberOfGuests: 4,
      seasonPrice: 150,
      offSeasonPrice: 120,
      reservations: {'1': {id: '1', firstDay: '2018-05-22', lastDay: '2018-05-30', firstName: 'Robbie', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-07', lastDay: '2018-05-27', firstName: 'Kevin', lastName: 'Doe', phone: '206 123 9876'} },
      id: '6'
    },
    7: {
      name: 'Room7',
      description: 'room description here',
      numberOfGuests: 4,
      seasonPrice: 150,
      offSeasonPrice: 120,
      reservations: {'1': {id: '1', firstDay: '2018-03-02', lastDay: '2018-03-20', firstName: 'Alvaro', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-01-02', lastDay: '2018-01-20', firstName: 'Chris', lastName: 'Doe', phone: '206 123 9876'} },
      id: '7'
    },
    8: {
      name: 'Room8',
      description: 'room description here',
      numberOfGuests: 4,
      seasonPrice: 150,
      offSeasonPrice: 120,
      reservations: {'1': {id: '1', firstDay: '2018-09-02', lastDay: '2018-09-12', firstName: 'Kim', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-08-22', lastDay: '2018-09-20', firstName: 'Rico', lastName: 'Doe', phone: '206 123 9876'} },
      id: '8'
    },
    9: {
      name: 'Room9',
      description: 'room description here',
      numberOfGuests: 5,
      seasonPrice: 200,
      offSeasonPrice: 150,
      reservations: {'1': {id: '1', firstDay: '2018-07-02', lastDay: '2018-07-12', firstName: 'Particia', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-05-20', firstName: 'Josh', lastName: 'Doe', phone: '206 123 9876'} },
      id: '9'
    },
    10: {
      name: 'Room10',
      description: 'room description here',
      numberOfGuests: 5,
      seasonPrice: 200,
      offSeasonPrice: 150,
      reservations: {'1': {id: '1', firstDay: '2018-04-02', lastDay: '2018-04-30', firstName: 'Anna', lastName: 'Smith', phone: '206 123 4567'}, '2': {id: '2', firstDay: '2018-05-02', lastDay: '2018-06-04', firstName: 'Travis', lastName: 'Doe', phone: '206 123 9876'} },
      id: '10'
    }
  },
  reservationsRequestsList: {
    123456789: {
      roomId: '5',
      firstName: 'Gosia',
      lastName: 'Haniszewska',
      phone: '206 123 4567',
      firstDay: '2018-03-02',
      lastDay: '2018-03-03',
      totalPrice: 300,
      id: '123456789'
    },
    987654321: {
      roomId: '2',
      firstName: 'Tomasz',
      lastName: 'Wiszkowski',
      phone: '206 321 4567',
      firstDay: '2018-07-02',
      lastDay: '2018-07-03',
      totalPrice: 200,
      id: '987654321'
    }
  },
};
