const express = require('express');
const bodyparser = require('body-parser');
const movieRouter = require('./routes/movies');
const app = express();

app.use(bodyparser.json());

app.use('/movies', movieRouter);

app.listen(3000, () => console.log('Listening'));