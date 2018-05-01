// Setup configuration
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const debug = require('debug')('appstructio')

const { NODE_ENV, PORT } = process.env;

const app = express();
// Start server
app.get('/', (req, res) => {
  res.send(`Healthcheck at ${new Date()}`);
});

app.set('port', PORT || 3030);
app.listen(app.get('port'), () => {
  debug(`Express running on port ${app.get('port')}`);
});
