// Packages Required for Script
const router = require("express").Router();
const notesRoutes = require("../apiRoutes/notes.js");

// Middleware Router for Notes
router.use(notesRoutes);

module.exports = router;
