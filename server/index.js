/* eslint-disable no-console */
const express = require('express');
const router = require('./routes.js');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.static('client/public'));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
