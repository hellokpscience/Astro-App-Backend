const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userroutes');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Working Server');
});


app.use('/api/users', userRoutes);

module.exports = app;