const express = require('express');
const path = require('path');
const router = require('./routes.js');

const PORT = 5000;
const app = express();

// Uncomment and edit the line below once frontend is set up
// app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Server listening at localhost:${PORT}!`);
});