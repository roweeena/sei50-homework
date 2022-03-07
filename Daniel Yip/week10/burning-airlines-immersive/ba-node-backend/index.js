const express = require("express");
const server = express();

const mongoose = require("mongoose");

const Flight = require("./models/Flight");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1/ba");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Connection error", err);
});

const PORT = 9999;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log(`http://localhost:${PORT}`);
});

server.get("/", async (req, res) => {
  try {
    const allFlights = await Flight.find().populate('reservations.user');
    res.json({ allFlights });
  } catch (error) {
    console.log("Error querying results", error);
  }
});

server.get("/flights/:id", async (req, res) => {
  try {
    const flight = await Flight.find({ flight_number: req.params.id });
    console.log(flight);
    res.json({ flight });
  } catch (error) {
    console.log(error);
  }
});

server.get("/flights/search/:origin/:destination", async (req, res) => {
  try {
    const searchResults = await Flight.find({
      origin: req.params.origin,
      destination: req.params.destination,
    });
    res.json({ searchResults });
  } catch (error) {
    console.log(error);
  }
});
