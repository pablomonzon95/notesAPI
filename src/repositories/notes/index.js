//Aqui guardamos los repositorios de notas para ser importados en los controllers.

const selectNotes = require("./selectNotes");
const insertNote = require("./insertNote");
const selectNoteById = require("./selectNoteById");
const editNoteById = require("./editNoteById");
const deleteNoteById = require("./deleteNoteById");
const selectPublicNotes = require("./selectPublicNotes");
const insertNoteImage = require("./insertNoteImage");

module.exports = {
  selectNotes,
  insertNote,
  selectNoteById,
  editNoteById,
  deleteNoteById,
  selectPublicNotes,
  insertNoteImage,
};
