const { selectNotesByCategoryId } = require("../../repositories/categories");
const { noteIdSchema } = require("../../schemas/notes");

const getNoteByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await noteIdSchema.validateAsync(id);
    const notes = await selectNotesByCategoryId(id);

    res.status(200).send({ status: "ok", data: notes });
  } catch (error) {
    next(error);
  }
};

module.exports = getNoteByCategory;
