const express = require("express");
const server = express();
server.use(express.json());

let todos = [
  {
    id: 0,
    name: "take out trash"
  },
  {
    id: 1,
    name: "wash dishes"
  }
];

server.get("/", (req, res) => {
	res.status(200).json({ message: "server is operational" });
});

server.get("/api/todos", (req, res) => {
	res.status(200).json(todos);
});

server.post("/api/:todos", (req, res) => {
  const newToDo = req.body;
   if (!newToDo.name) {
    res.status(400).json({ error: "invalid todo" });
  } else {
    todos.push(newToDo);
     res.status(201).json({ message: "To Do added" });
  }
});

server.delete("/api/todos/:id", (req, res) => {
	const { id } = req.params;
	res.status(202).json(id);
});
 
module.exports = server;