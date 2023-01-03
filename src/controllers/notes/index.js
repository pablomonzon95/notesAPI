const getNotes = require("../notes/getNotes");
const createNote = require("../notes/createNote");
const getNote = require("./getNote");
const editNote = require("./editNote");
const deleteNote = require("./deleteNote");
module.exports = { getNotes, createNote, getNote, editNote, deleteNote };
