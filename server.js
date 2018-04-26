const express = require('express');
const morgan = require('morgan');
const Band = require('./Band');
const server = express();
server.use(express.json());
server.use(morgan('dev'));

// Routes
server.get('/api/bands', (req, res) => {
  Band.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post('/api/bands', (req, res) => {
  const band = new Band(req.body);
  band
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.put('/api/bands/:id', (req, res) => {
  const update = req.body;
  Band.findByIdAndUpdate(req.params.id, update)
    .then(response => {
      Band.findById(req.params.id)
        .then(updates => {
          res.status(200).json(updates);
        })

        .catch(err => {
          res.status(404).json({ Error: 'Band Not Found' });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete('/api/bands/:id', (req, res) => {
  Band.findByIdAndRemove(req.params.id)
    .then(response => res.json({ status: 'success' }))
    .catch(err => res.status(500).json(err));
});

module.exports = server;
