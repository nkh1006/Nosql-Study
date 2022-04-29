const express = require('express');
const mongoose = require('mongoose');
const url = 'mongobd://localhost/AlienDBex';

const app = express();
const PORT = 9000;

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
  console.log('connected ...');
});

const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} ports`);
});