const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/guestbook', (req, res) => {
    res.send(
        {
            name: 'james',
            total: 17,
            min: 2,
            max: 4,
          }
    )
})

app.get('/dogs/:id', (req, res) => {
    console.log('params', req.params)
    res.send({
        dog: req.params.id
    })
})


app.listen(3000 ,( ) => console.log('Example app listening on port 3000!'))