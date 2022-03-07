const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({

  flight_number: String,
  origin: String,
  destination: String,
  departure_date: Date,

  airplane: {
    name: String,
    rows: Number,
    cols: Number
  },

  reservations: [
    {
      row: Number,
      col: Number,
      user_id: Number //just for now, fake...
      
      //TODO: make this work
      // user: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'User' // 'a reservation belongs to a User'
      // }
    }
  ]

}); // end of new mongoose.Schema({...})

// In order to be able to 'require()' this model file in our seeds file and in our express server, we need to export it here using the older 'CommonJS' syntax. (this is the older version of 'export default ...')

module.exports = mongoose.model('Flight', FlightSchema)