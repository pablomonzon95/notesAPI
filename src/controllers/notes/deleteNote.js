const { generateError } = require("../../utils");
const { editNoteSchema, noteIdSchema } = require("../../schemas/notes");
const { selectNoteById, deleteNoteById } = require("../../repositories/notes");
const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    await noteIdSchema.validateAsync(id);

    const note = await selectNoteById(id);
    if (!note) {
      generateError("Note doesnt exists", 404);
    }
    const loggedUserId = req.auth.id;
    if (note.userId !== loggedUserId) {
      generateError("you dont have rights to delete this note", 401);
    }
    await deleteNoteById(id);
    res.status(200).send({ status: "ok", message: "Note deleted succesfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteNote;
