const express = require('express');
const morgan = require('morgan');
const Weapon = require('./models/WeaponsModel');
const mongoose = require('mongoose');

const server = express();

const PORT = 3000;

server.use(morgan('combined'));
server.use(express.json());

mongoose
  .connect('mongodb://localhost/test')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB'));

server.post('/weapons', (req, res) => {
  const newWeapon = req.body;
  const weapon = new Weapon(newWeapon);
  weapon
    .save()
    .then(weapon => res.status(200).json(weapon))
    .catch(err =>
      res.status(500).json({ msg: 'Error saving the weapon', err })
    );
});

server.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${PORT}`);
});

module.exports = server;
