const { noteSchema } = require("../../schemas/notes");
const { insertNote, insertNoteImage } = require("../../repositories/notes");
const { processAndSaveImage } = require("../../utils");

/**
 * Función que valida el cuerpo de la nota que pasamos en la petición , posteriormente la inserta en la base de datos y devuelve una respuesta con los datos de la nota creada.Ademas comprobamos si hay alguna imagen asociada a la nota y de ser así la guardamos en nuestro fichero.
 */

const createNote = async (req, res, next) => {
  try {
    const userId = req.auth.id;


    await noteSchema.validateAsync(req.body);
    const { title, note, public, categoryId } = req.body;
    let imageName;
    if (req.files) {
      const image = req.files.image;

      imageName = await processAndSaveImage(image.data);
    } else {
      imageName = "No images";
    }

    const idNote = await insertNote({
      title,
      note,
      imageName,
      public: public === "on" ? true : false,
      categoryId,
      userId,
    });

    res.status(200).send({
      status: "ok",
      data: {
        id: idNote,
        title: title,
        note: note,
        categoryId: categoryId,
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
