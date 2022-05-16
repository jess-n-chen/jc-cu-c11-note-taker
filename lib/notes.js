// Packages Required for Script
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Function to Save New Note
function saveNewNote(body, notesArray) {
  // Destructure POST Response
  const { title, text } = body;
  // Create New Object with Uniquely Generated ID
  const note = { id: uuidv4(), title, text };

  // Push New Note to Notes Array
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

// Validate New Note Values
function validateNewNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

module.exports = {
  saveNewNote,
  validateNewNote,
};
