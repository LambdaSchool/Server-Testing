const express = require("express");

const userRouter = require("./users/userController");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "running!" });
});

server.use("/api/user", userRouter);

if (process.env.NODE_ENV !== "test") {
  server.listen(5000, () => {
    console.log(`== Server is up and runing on 5000 ==`);
  });
}

module.exports = server;
