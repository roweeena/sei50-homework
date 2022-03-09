const Flight = require('../models/Flight');

module.exports = {
    
    home(req, res){
        console.log('Welcome to BA Backend');
        res.send('Welcome to BA Backend');
    },

    async  searchFlight(req, res){
        try {
            const {origin , destination } = req.params
            const flights = await Flight.find({ origin, destination});
            res.json(flights)
        } catch (error) {
            console.log(error)
            res.sendStatus(422); //Unprocesable Entity
        }
    },

    async getFlight(req, res) {
        console.log('all good');
        const flight = await Flight.findOne({_id: req.params.id})
        res.json(flight)
    },
    
    async bookFlight(req, res){
        try {
            const newReservation = {
                row: req.body.row,
                col: req.body.col,
                user_id: 11
            }
            const result = await Flight.updateOne(
                { _id: req.body.flight_id },
                {
                    $push: {
                        reservations: newReservation
                    }
                }
        
            )
    
            if(result.modifiedCount === 0 ){
                res.json({error: 'Invalid flight ID'});
                return;
            }
            res.json(newReservation); 
        } catch (error) {
            res.sendStatus(422);
        }
       
    }

}