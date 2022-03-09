const express = require("express");
const server = express();

const mongoose = require("mongoose");

const Flight = require("./models/Flight");
const User = require("./models/User");

const flightsController = require('./controllers/flightsController')

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

server.get("/", flightsController.home);

server.get("/flights/:id", flightsController.show);

server.get("/flights/search/:origin/:destination", flightsController.search);

server.use(express.json());

server.post("/reservations/create", flightsController.createReservation
      
    )

    // console.log('newFlight', newFlight);
    

