// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form on GET /api/products
app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "productForm.html"));
});

// Handle form submission (optional: prints data to console)
app.post("/api/products", (req, res) => {
  const { productName } = req.body;
  console.log("Product submitted:", productName);
  res.send(`Product "${productName}" added successfully!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
