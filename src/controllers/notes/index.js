//Aqui guardamos todos los controllers de notas para ser importados desde el server.js

const getNotes = require("../notes/getNotes");
const createNote = require("../notes/createNote");

const editNote = require("./editNote");
const deleteNote = require("./deleteNote");
const { getPublicNotes } = require("./getPublicNotes");
const getNotebyId = require("./getNotebyId");

module.exports = {
  getNotes,
  createNote,
  editNote,
  deleteNote,
  getPublicNotes,
  getNotebyId,
};
