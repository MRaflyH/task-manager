require("dotenv").config();
const connectDB = require("../config/db");

(async () => {
  try {
    await connectDB();
    console.log("Connection test successful!");
    process.exit(0); // Exit on success
  } catch (err) {
    console.error("Connection test failed:", err.message);
    process.exit(1); // Exit on failure
  }
})();
