require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to the database
(async () => {
  await connectDB();
})();

// Export the app for Vercel
module.exports = app;
