const { noteSchema } = require("../../schemas/notes");
const { insertNote } = require("../../repositories/notes");
const createNote = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await noteSchema.validateAsync(req.body);
    const { title, note, public, categoryId } = req.body;
    const idNote = await insertNote({
      title,
      note,
      public,
      categoryId,
      userId,
    });
    res.status(200).send({
      status: "ok",
      data: {
        title: title,
        note: note,
        categoryiD: categoryId,
        userId: userId,
        noteId: idNote,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createNote;
