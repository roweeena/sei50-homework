const express = require("express");
const server = express();

const mongoose = require("mongoose");

const Flight = require("./models/Flight");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1/ba");

const db = mongoose.connection;
const cors = require('cors')
server.use(cors())

db.on("error", (err) => {
  console.log("Connection error", err);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log(`http://localhost:${PORT}`);
});

//Setup a generic handler that runs first for ANY route
// server.use((req, res, next) => {
//   console.log('request', req.url);
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })
server.get("/", async (req, res) => {
  try {
    const allFlights = await Flight.find().populate('reservations.user');
    res.json({ allFlights });
  } catch (error) {
    console.log("Error querying results", error);
  }
});


server.get("/flights/:id", async (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  console.log(req.params.id);
  try {
    const flight = await Flight.findOne({ _id: req.params.id });
    console.log(flight);
    res.json( flight );
  } catch (error) {
    console.log(error);
  }
});

server.get("/flights/search/:origin/:destination", async (req, res) => {

  // res.header('Access-Control-Allow-Origin', '*')

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
});
server.use(express.json());

server.post("/reservations/create", async(req, res)=>{
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
    
  
  
  

})