// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Route to serve HTML file
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "products.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
