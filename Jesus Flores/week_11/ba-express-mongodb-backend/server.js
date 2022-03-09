const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./dbconfig');
const flightController = require('./controllers/flightsController');
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

app.get('/', flightController.home )

app.get('/flights/search/:origin/:destination', flightController.searchFlight)

app.get('/flights/:id', flightController.getFlight)

app.post('/reservation', flightController.bookFlight)