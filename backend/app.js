const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000);
