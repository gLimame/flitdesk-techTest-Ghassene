const express = require('express');
const episodesRouter = require('./Router/episode')

const app = express();

app.use('/', episodesRouter);

app.listen(6000, () => {
  console.log('server started');
});