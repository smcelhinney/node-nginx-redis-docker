// Setup configuration
require('dotenv').config();
const {
  NODE_ENV,
  PORT,
  REDIS_PORT_6379_TCP_ADDR: host,
  REDIS_PORT_6379_TCP_PORT: port
} = process.env;

const express = require('express');
const cors = require('cors');
const debug = require('debug')('appstructio')
const redis = require('redis')
const {promisify} = require('util');

const client = redis.createClient({ host, port });
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// console.log(process.env);

const app = express();
// Start server
app.get('/', async (req, res) => {
  const redisVal = await getAsync('TEST_VAL');
  res.send(`Healthcheck at ${new Date()} REDIS VAL: ${redisVal}`);
});

app.set('port', PORT || 3030);
app.listen(app.get('port'), async () => {
  await setAsync('TEST_VAL', 'doobydoobydo');
  debug(`Express running on port ${app.get('port')}`);
});
