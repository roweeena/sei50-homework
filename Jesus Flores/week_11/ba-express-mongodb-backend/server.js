const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./dbconfig');
const Flight = require('./models/Flight');
const cors = require('cors')
app.use(cors())

// app.use((req, res, next) => {
    
//     next();
// });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Welcome to BA Backend');
    res.send('Welcome to BA Backend');
})

app.get('/flights/search/:origin/:destination', async (req, res) => {
    try {
        const {origin , destination } = req.params
        const flights = await Flight.find({ origin, destination});
        res.json(flights)
    } catch (error) {
        console.log(error)
        res.sendStatus(422); //Unprocesable Entity
    }
})

app.get('/flights/:id', async (req, res) => {
    console.log('all good');
    const flight = await Flight.findOne({_id: req.params.id})
    res.json(flight)
})