const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve the form from the views folder
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "productForm.html"));
});

// ✅ Handle POST request
app.post("/api/products", (req, res) => {
  const { productName } = req.body;
  console.log("🛒 Product received:", productName);
  res.json({ message: `Product "${productName}" added successfully!` });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/form`);
});
