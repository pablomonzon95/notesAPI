const { generateError } = require("../../utils");
const { selectNoteById } = require("../../repositories/notes");
const { noteIdSchema } = require("../../schemas/notes");

const getPublicNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    await noteIdSchema.validateAsync(id);

    const note = await selectNoteById(id);
    if (!note) {
      generateError("Note doesnt exists", 404);
    }

    res.status(200).send({ status: "ok", data: note });
  } catch (error) {
    next(error);
  }
};
module.exports = getPublicNote;
