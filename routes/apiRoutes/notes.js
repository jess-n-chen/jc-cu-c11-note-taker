// Packages Required for Script
const router = require("express").Router();
const { saveNewNote, validateNewNote, deleteNote } = require("../../lib/notes");
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

router.delete("/notes/:id", (req, res) => {
  const result = deleteNote(req.params.id, notes);

  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

module.exports = router;
