// Packages Required for Script
const router = require("express").Router();
const uuid = require("uuid");
const db = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(db);
});

module.exports = router;
