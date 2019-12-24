const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// create a GET route
app.get('/get', (req, res) => {
  res.send({ express: 'YOUR BACKEND RESPONSE IS CONNECTED TO REACT' });
});

// create a GET route
app.get('/static', (req, res) => {
    res.json( '<h1>I am HTML</h1>');
});





// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
