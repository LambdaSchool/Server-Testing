const express = require('express');
const User = require('./User/User.js')
const server = express();

server.get('/', (req, res) => {
    // console.log("server yay")
  res.status(200).json({ api: 'running' });
});


server.post('/newUser', (req, res) => {
  const {username, password } = req.body;
  User.create({username, password})
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.json(err)
    })
})

server.delete('/delete', (req, res) => {
  const {id} = req.params
  User.findByIdAndRemove(id)
    .then (user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

if(process.env.NODE_ENV !== 'test'){
  const port = 5000;
  server.listen(port, () => {
    console.log('Server running on port 5000')
  })
} 


module.exports = server;

