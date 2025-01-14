const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true); // Add this line to suppress the warning
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err.message);
    process.exit(1); // Exit the process in case of a connection failure
  }
};

module.exports = connectDB;
