require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

(async () => {
  await connectDB();
  console.log("Database connected!");
})();

// Export the app for Vercel
module.exports = app;
