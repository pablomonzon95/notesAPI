const { noteSchema } = require("../../schemas/notes");
const { insertNote, insertNoteImage } = require("../../repositories/notes");
const { processAndSaveImage } = require("../../utils");
const { insertImg } = require("../../repositories/images");

/**
 * Función que valida el cuerpo de la nota que pasamos en la petición , posteriormente la inserta en la base de datos y devuelve una respuesta con los datos de la nota creada.Ademas comprobamos si hay alguna imagen asociada a la nota y de ser así la guardamos en nuestro fichero.
 */

const createNote = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    console.log(req.body);
    console.log(req.files);

    await noteSchema.validateAsync(req.body);
    const { title, note, public, categoryId } = req.body;
    let insertedImageId;
    if (req.files) {
      const image = req.files.image;

      insertedImageId = await insertImg(image.name, image.data);

      imageName = await processAndSaveImage(image.data);
      await insertNoteImage(imageName, insertedImageId);
    } else {
      imageName = "No images";
    }

    const idNote = await insertNote({
      title,
      note,
      insertedImageId,
      public: public === "on" ? true : false,
      categoryId,
      userId,
    });

    res.status(200).send({
      status: "ok",
      data: {
        title: title,
        note: note,
        categoryId: categoryId,
        imageId: insertedImageId,
        userId: userId,
        noteId: idNote,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createNote;
