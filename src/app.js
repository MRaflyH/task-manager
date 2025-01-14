const express = require("express");
const tasksRoute = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use("/api/tasks", tasksRoute);

module.exports = app;
