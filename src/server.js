const express = require("express");
const server = express();

const knex = require("knex");

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(helmet());

// spinup test endpoint
server.get("/", (req, res) => {
  res.status(200).send("Spinup Test Working");
});

module.exports = server;
