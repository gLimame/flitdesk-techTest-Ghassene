const express = require('express');
const episodesRouter = require('./Router/episode')

const app = express();

app.use('/', episodesRouter);

app.listen(4000, () => {
  console.log('server started');
});