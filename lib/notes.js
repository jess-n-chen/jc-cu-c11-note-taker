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

  // Update DB JSON with Updated Array
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

// Function to Delete Note By ID
function deleteNote(id, notesArray) {
  // Find Index of Note
  const noteIndex = notesArray.findIndex((object) => {
    return object.id === id;
  });

  // Remove Note from Array Using Index Value
  notesArray.splice(noteIndex, 1);

  // Update DB JSON with Updated Array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );

  return notesArray;
}

module.exports = {
  saveNewNote,
  validateNewNote,
  deleteNote,
};
