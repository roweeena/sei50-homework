const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./dbconfig');
const Flight = require('./models/Flight');
const cors = require('cors')
app.use(cors())
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
// Parse JSON bodies (as sent by API clients)
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

app.post('/reservation', async (req, res) => {
    const newReservation = {
        row: req.body.row,
        col: req.body.col,
        user_id: 11
    }
    const flight = await Flight.updateOne(
        { _id: req.body.flight_id },
        {
            $push: {
                reservations: newReservation
            }
        }

    )
    res.json(newReservation);
})