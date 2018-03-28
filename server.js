const express = require('express');
const morgan = require('morgan');

const server = express();
server.use(morgan('combined'));
server.use(express.json());

server.post('/band', (req, res) => {
  res.status(200).send(req.body);
});

module.exports = server;
