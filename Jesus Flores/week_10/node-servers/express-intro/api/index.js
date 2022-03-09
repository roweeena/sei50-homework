const express = require('express');

const app = express();
//Handling error

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
    console.log('query',req.query);
    // res.send({
    //     dog: req.params.id
    // })
    const data = {
        name: "lol",
        age: 2,
        goodBoy: true,
    }
    res.json(data)
})
app.use((req, res) => {
    res.send('Page not founsdsdsdsdsd', req.url);
    next()
})

app.listen(3000 ,( ) => console.log('Example app listening on port 3000!'))