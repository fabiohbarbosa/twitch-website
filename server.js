const express = require('express');
const helmet = require('helmet');
const http = require('http');
const path = require('path');

const app = express();
// disable express default headers
app.disable('x-powered-by');

//static files
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(helmet.noCache());
app.get('/website/healthcheck', (req, res) => res.json({ status: 'UP' }));

const server = http.createServer(app);

// set max connections
server.maxConnections = 256;

const port = 3000;
server.listen(port, () => {
  console.log(`Twitch API now listening on ${port}`)
});
