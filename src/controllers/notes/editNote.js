const { generateError } = require("../../utils");
const { editNoteSchema, noteIdSchema } = require("../../schemas/notes");
const { selectNoteById, editNoteById } = require("../../repositories/notes");
const editNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    await noteIdSchema.validateAsync(id);

    const note = await selectNoteById(id);
    if (!note) {
      generateError("Note doesnt exists", 404);
    }
    const loggedUserId = req.auth.id;
    if (note.userId !== loggedUserId) {
      generateError("you dont have rights to edit this note", 401);
    }
    await editNoteSchema.validateAsync(req.body);
    const updatedNote = { ...note, ...req.body };
    await editNoteById(updatedNote);
    res.status(200).send({ status: "ok", data: updatedNote });
  } catch (error) {
    next(error);
  }
};
module.exports = editNote;
