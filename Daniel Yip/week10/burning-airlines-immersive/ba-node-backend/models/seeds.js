const mongoose = require('mongoose');

//Load our Flight model file (and any others?)
const Flight = require('./Flight');
const User = require('./User');


// Connect to DB server

mongoose.connect('mongodb://127.0.0.1/ba')

const db = mongoose.connection;

db.on('error', (err)=>{
  console.log('Connection error', err);
});

// Once the connection is established, we can start querying/seeding

db.once('open', async () => {

  await User.deleteMany({});

  let u1Id
  let u2Id

  try {
    const users = await User.create([
      {
        name: 'Test User 1',
        email: 'one@one.com'
      },
      {
        name: 'Test User 2',
        email: 'two@two.com'
      },
      {
        name: 'Test User 3',
        email: 'three@three.com'
      }
    ])
    u1Id = users[0]._id
    u2Id = users[1]._id
    console.log('USER 1 ID', u1Id);
    
  } catch (err) {
    console.log('error creating users', err);
  }

  await Flight.deleteMany({});

  try {
    await Flight.create([
      {
        flight_number: 'BA123',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-20T04:20:00Z'),
        airplane: {name: '737 MAX', rows: 20, cols: 6}, //nested data instead of an ID assocication
        reservations: [
          {row: 1, col: 1, user: u1Id},
          {row: 2, col: 2, user: u1Id},
          {row: 3, col: 3, user: u2Id}
        ],
      },
      {
        flight_number: 'BA456',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-21T04:20:00Z'),
        airplane: {name: '767', rows: 16, cols: 4}, //nested data instead of an ID assocication
        reservations: [
          {row: 1, col: 1, user: u1Id},
          {row: 1, col: 2, user: u1Id},
          {row: 1, col: 3, user: u2Id}
        ],
      }
    ])
    
  } catch (err) {
    console.log('error creating flights', err);
  }
  
  // console.log('Created flights:', results);
  
  try {
    // ActiveRecord Flight.all, but it returns a promise...
    const flights = await Flight.find()
    console.log(flights);
  } catch (error) {
    console.log('Error querying results', err);
    process.exit(1);
  }
  

  process.exit(0); // all good exit program

});
