//Aqui guardamos todos los controllers de notas para ser importados desde el server.js

const getNotes = require("../notes/getNotes");
const createNote = require("../notes/createNote");
const getNote = require("./getNote");
const editNote = require("./editNote");
const deleteNote = require("./deleteNote");
const { getPublicNotes, getPublicNotesImages } = require("./getPublicNotes");

module.exports = {
  getNotes,
  createNote,
  getNote,
  editNote,
  deleteNote,
  getPublicNotes,
  getPublicNotesImages,
};
