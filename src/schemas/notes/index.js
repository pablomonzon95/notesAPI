//Aqui guardamos los esquemas de notas para ser importados en los controllers.

const noteSchema = require("./noteSchema");
const noteIdSchema = require("./noteIdSchema");
const editNoteSchema = require("./editNoteSchema");
module.exports = { noteSchema, noteIdSchema, editNoteSchema };
