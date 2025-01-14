const express = require("express");
const tasksRoute = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use("/api/tasks", tasksRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});

module.exports = app;
