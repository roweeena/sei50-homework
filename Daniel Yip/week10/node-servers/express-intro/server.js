// Import the express package to use in this file
// using the older 'CommonJS' syntax (same as 'import x from y)

const express = require('express');

// Use the express function returned from requiring rhe package to create a webserver app object
const app = express();

// Use the 'public' folder as an assets folder
app.use(express.static('public'))

const ejs = require('ejs')
// Use the EJS template system as an Express plugin
app.set('view-engine', ejs)




// What about a database?
// SQL: 'sequel'

//MERN: MongoDB, Express, React, Node - full stack JS



app.listen(8000, ()=>{
  console.log('Now listening at http://localhost:8000');
});

// Define the routes that we want to respond to, and how we should respond to them
app.get('/', (req, res) => {
  console.log('Someone requested /');

  res.send('<h1>Hello world from Expresss!!!!</h1>');
  console.log(req);

  // res.send(req)
  
  
}); // GET /

app.get('/guestbook', (req, res)=>{

  res.send(`<h2>Sign my guest book</h2><img src="http://www.fillmurray.com/500/500">`)

}); // GET /guestbook

app.get('/dogs/:id', (req, res)=>{

  console.log(req.params);
  console.log('querystring', req.query);

  // res.send(`Dogs show page id: ${req.params.id}`)
  // res.send(req.params)

  const dogInfo = {
    name: 'fido',
    age: 2,
    goodBoy: true
  };

  res.json(dogInfo)

}); // GET /dogs/:id

app.get('/hello/:person', (req, res)=>{

  res.render('greeting.ejs', {
    user: req.params.person,
    age: Math.floor(Math.random()*100)
  })

})


// To handle a route which was not matched by any of the above routes, we can define a kind of fallback handler at the end, which becomes a default error handles
app.use((req, res)=>{
  console.log('Failed request!', req.url);

  res.send('PAGE NOT FOUND');
  // res.sendStatus(404);


});
