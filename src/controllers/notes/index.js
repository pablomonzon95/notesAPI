const getNotes = require("../notes/getNotes");
const createNote = require("../notes/createNote");
const getNote = require("./getNote");
const editNote = require("./editNote");
const deleteNote = require("./deleteNote");
const getPublicNotes = require("./getPublicNotes");
module.exports = {
  getNotes,
  createNote,
  getNote,
  editNote,
  deleteNote,
  getPublicNotes,
};
