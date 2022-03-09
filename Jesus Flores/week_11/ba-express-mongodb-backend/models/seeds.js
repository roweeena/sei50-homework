const db = require('../dbconfig');
const Flight = require('./Flight');
// Once the connection is established, we can start querying/seeding
db.once('open', async () => {

  console.log('Connected.');

  // ActiveRecord Flight.all
  // Flight.find()
  //   .then( flights => {
  //     console.log('flights', flights);
  //   })
  //   .catch( err => {
  //     console.log('Error querying flights:', err);
  //   });


  // Flight.destroy_all
  await Flight.deleteMany();

  //flight.destroy_all
  // Flight.deleteMany()
  //       .then(res => {
  //         Flight.create(...);
  //       })
  //       .catch(error => error);

  
  // Same as ActiveRecord Flight.create except you can pass in an array
  // to specify multiple flights to create at the same time
  try {
    const results = await Flight.create([
      {
        flight_number: 'BA123',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-20T04:20:00Z'),
        // nested data instead of an ID (association) for a belongs_to
        airplane: { name: '737 Max', rows: 20, cols: 6 },
        // As above, we can store a has_many as nested data here,
        // this time an array of reservation objects...
        // BUT since we will almost certainly want to be able to see
        // reservations in a different context, i.e. "what are all the
        // reservations for a specific user", we WILL eventually want to
        // make this into a list of Reservation IDs, or more likely,
        // each User document will contain a duplicated ("denormalized")
        // list of reservations for that user, which will link back to
        // this Flight using the flight ID
        reservations: [
          { row: 1, col: 1, user_id: 10 }, // NOT real user_ids yet!
          { row: 2, col: 2, user_id: 10 },
          { row: 3, col: 3, user_id: 11 }
        ], // reservations[]
      }, // end of flight #1
      {
        flight_number: 'BA456',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-21T04:20:00Z'),
        airplane: { name: '767', rows: 16, cols: 4 },
        reservations: [
          { row: 1, col: 1, user_id: 10 }, // NOT real user_ids yet!
          { row: 1, col: 2, user_id: 10 },
          { row: 1, col: 3, user_id: 11 }
        ], // reservations[]
      }, // end of flight #2
    ]);
  } catch( err ){
    console.log('Error creating flights:', err);
  }

  try {
    const flights = await Flight.find();
    console.log('flights:', flights);
  } catch ( err ){
    console.log('Error finding flights:', err);
    process.exit(1);
  }

  // console.log('Created flights:', results);

  process.exit(0); // all good, quit program


}); // once open
