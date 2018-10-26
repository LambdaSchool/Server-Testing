const express = require("express");

const server = express();

server.use(express.json());

const users = [];

server.get("/users", (req, res) => {
  res.status(200).json(users);
});

server.post("/users", (req, res) => {
  const { username, age, height } = req.body;

  if (!username || !age || !height) {
    return res
      .status(422)
      .json({ error: "Please provide a username, age, and height." });
  }
  users.push({ username: username, age: age, height: height });
  res.status(200).json({ username: username, age: age, height: height });
});

server.delete("/users/:username", (req, res) => {
  const { username } = req.params;

  res.status(200).json({ deleted: `${username}` });
});

module.exports = server;
