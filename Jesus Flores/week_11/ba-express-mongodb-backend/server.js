const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./dbconfig');
const Flight = require('./models/Flight');



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Welcome to BA Backend');
    res.send('Welcome to BA Backend');
})

app.get('/flights/search/:origin/:destination', async (req, res) => {
    try {
        const flights = await Flight.find({
            origin: req.params.origin,
            destination: req.params.destination
        });
        res.json(flights)
    } catch (error) {
        console.log(error)
        res.sendStatus(422); //Unprocesable Entity
    }
})