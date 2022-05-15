// Packages Required for Application
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize Express App
const PORT = process.env.PORT || 3002;
const app = express();

// Setup Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Express Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Express Listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
