// Packages Required for Script
const router = require("express").Router();
const { saveNewNote, validateNewNote } = require("../../lib/notes");
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  if (!validateNewNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = saveNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
