require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
(async () => {
  await connectDB();
  console.log("Database connected!");
})();

// Export the app for Vercel
module.exports = app;
