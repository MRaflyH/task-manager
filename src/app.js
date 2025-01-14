const express = require("express");
const tasksRoute = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use("/api/tasks", tasksRoute);
app.use("/api/products", productsRoute); // Add products route

// Default route for the root
app.get("/", (req, res) => {
  res.send("Task Manager API is live!");
});

module.exports = app;
