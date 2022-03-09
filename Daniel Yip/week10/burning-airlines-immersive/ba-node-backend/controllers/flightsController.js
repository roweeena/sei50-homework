
const Flight = require('../models/Flight');


// Old version of 'export default xxxx'
module.exports = {
  
  async home(req, res){
    try {
      const allFlights = await Flight.find().populate('reservations.user');
      res.json({ allFlights });
    } catch (error) {
      console.log("Error querying results", error);
    }
  },

  async search(req, res){

    try {
      const query = {
        origin: req.params.origin,
        destination: req.params.destination,
      }
      // const {origin, destination} = req.params
      const searchResults = await Flight.find(query);
      res.json( searchResults );
    } catch (error) {
     res.sendStatus(422); // unprocessable entity
    } 
  },

  async show(req, res){
    // res.header('Access-Control-Allow-Origin', '*')
    console.log(req.params.id);
    try {
      const flight = await Flight.findOne({ _id: req.params.id });
      console.log(flight);
      res.json( flight );
    } catch (error) {
      console.log(error);
    }
  },


  async createReservation(req, res){
    console.log(req.body);
    
    Flight.findByIdAndUpdate(req.body.flight_id,
      // push a new reservation onto the array
      {"$push": 
        {"reservations": {
          "col": req.body.col, 
          "row": req.body.row, 
          "user": "6225e5bce2ce96ae8311f1b1" 
        }}
      },
      // options, 'new: true' returns the updated document 
      {
      new: true
      }, 
      // callback function
      (err, sucess)=>{
        res.send(err? err : sucess)
      }
    )
  },



};