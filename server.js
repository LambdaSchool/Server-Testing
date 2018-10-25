const express = require('express');
const server = express();

server.use(express.json());

let gamesList = [
  {
    name: 'Spider-Man',
    yearRelease: 2018,
    genre: 'action-adventure',
  },
  {
    name: 'Fallout 4',
    yearRelease: 2017,
    genre: 'action, role-playing',
  },
  {
    name: "PLAYERUNKOWN'S Battlegrounds",
    yearRelease: 2017,
    genre: 'Action',
  },
  {
    name: 'Minecraft',
    yearRelease: 2009,
    genre: 'sandBox, survival Game',
  },
  {
    name: 'Grand Theft Auto V',
    yearRelease: 2013,
    genre: 'action-adventure',
  },
  {
    name: 'Portal',
    yearRelease: 2007,
    genre: 'platform, puzzle',
  },
];

server.get('/', (req, res) => {
  res.send(gamesList);
});

server.post('/game', (req, res) => {
  let { name, yearRelease, genre } = req.body;
  if (!name || !yearRelease || !genre) {
    res.status(400).send('Missing the name, release year, or genre.');
  } else {
    let newGame = { name, yearRelease, genre };
    gamesList = [...gamesList, newGame];

    res.status(201).send(newGame);
  }
});

server.delete('/game/:name', (req, res) => {
  const { name } = req.params;

  const cut = gamesList
    .map(game => {
      return game.name;
    })
    .indexOf(name);
  gamesList = [...gamesList.slice(0, cut), ...gamesList.slice(cut + 1)];

  res.status(202).send('Deleted');
});

module.exports = server;
