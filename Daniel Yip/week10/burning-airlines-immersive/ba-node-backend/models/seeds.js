const mongoose = require('mongoose');

//Load our Flight model file (and any others?)
const Flight = require('./Flight');

// Connect to DB server

mongoose.connect('mongodb://127.0.0.1/ba')

const db = mongoose.connection;

db.on('error', (err)=>{
  console.log('Connection error', err);
});

// Once the connection is established, we can start querying/seeding

db.once('open', async () => {

  await Flight.deleteMany({});


  try {
    const results = await Flight.create([
      {
        flight_number: 'BA123',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-20T04:20:00Z'),
        airplane: {name: '737 MAX', rows: 20, cols: 6}, //nested data instead of an ID assocication
        reservations: [
          {row: 1, col: 1, user_id: 10},
          {row: 2, col: 2, user_id: 10},
          {row: 3, col: 3, user_id: 11}
        ],
      },
      {
        flight_number: 'BA456',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-21T04:20:00Z'),
        airplane: {name: '767', rows: 16, cols: 4}, //nested data instead of an ID assocication
        reservations: [
          {row: 1, col: 1, user_id: 10},
          {row: 1, col: 2, user_id: 10},
          {row: 1, col: 3, user_id: 11}
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
