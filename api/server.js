const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({message: 'Server check'});
});

server.post('/students', (req, res) => {
  let { first, last, house } = req.body;

  if (!first || !last) {
    return res.status(400).json({ error: "Please provide student's full name."})
  }

  return res.status(201).json({first, last, house});  
})

server.delete('/students/:id', (req, res) => {
  let { id } = req.params;


  return res.status(200).json({ message: `Farewell!`});
})

module.exports = server;