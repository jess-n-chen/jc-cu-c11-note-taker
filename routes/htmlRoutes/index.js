// Packages Required for Script
const path = require("path");
const router = require("express").Router();

// Express Route Handlers
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
