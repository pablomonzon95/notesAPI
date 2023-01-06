const { noteSchema } = require("../../schemas/notes");
const { insertNote, insertNoteImage } = require("../../repositories/notes");
const { processAndSaveImage } = require("../../utils");
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
    let imageName;
    if (req.files) {
      const image = req.files.image;

      imageName = await processAndSaveImage(image.data);
      await insertNoteImage(imageName, idNote);
    } else {
      imageName = "No images";
    }

    res.status(200).send({
      status: "ok",
      data: {
        title: title,
        note: note,
        categoryiD: categoryId,
        image: imageName,
        userId: userId,
        noteId: idNote,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createNote;
