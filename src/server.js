require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
(async () => {
  await connectDB();
  console.log("Database connected!");
})();

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the app for Vercel
module.exports = app;
