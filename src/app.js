const express = require("express");
const tasksRoute = require("./routes/tasks");
const productsRoute = require("./routes/products"); // Import the products route

const app = express();
app.use(express.json());
app.use("/api/tasks", tasksRoute);
app.use("/api/products", productsRoute); // Use the products route

app.get("/", (req, res) => {
  res.send("Task Manager API is live!");
});

module.exports = app;
