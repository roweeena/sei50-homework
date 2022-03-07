const express = require('express');
const server = express();

const mongoose = require('mongoose');

const Flight = require('./models/Flight');

mongoose.connect('mongodb://127.0.0.1/ba')

const db = mongoose.connection;

db.on('error', (err)=>{
  console.log('Connection error', err);
})

const PORT =  9999;


server.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}...`);
  console.log(`http://localhost:${PORT}`);
});

server.get('/', async (req, res)=>{
  console.log('get/');
  
  try {
  const res = await Flight.find()
  console.log(res);  
  } catch (error) {
    console.log('Error querying results', error);
  }




  res.send('welcome to the homepage, its great')
})


