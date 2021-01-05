const express = require('express');
const episodesRouter = require('./Router/episode')

var app = express()

app.use('/', episodesRouter);

app.listen(3000, () => {
  console.log('server started');
});
