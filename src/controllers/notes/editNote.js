const { generateError, processAndSaveImage } = require("../../utils");
const { editNoteSchema, noteIdSchema } = require("../../schemas/notes");
const { insertImg } = require("../../repositories/images");
const {
  selectNoteById,
  editNoteById,
  insertNoteImage,
} = require("../../repositories/notes");

/**
 * Función que valida el id recibido como parametro , verifica que la nota a editar exista y pertenezca al usuario que está logueado.
 * Posteriormente valida el body de la petición.
 * Esta función permite editar cualquier campo de la nota (incluido añadir una imagen).
 * Devuelve los datos de la nota ya actualizados.
 */
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
    console.log(req.body);
    await editNoteSchema.validateAsync(req.body);

    let insertedImageId = "";
    if (req.files) {
      const image = req.files.image;

      insertedImageId = await insertImg(image.name, image.data);

      imageName = await processAndSaveImage(image.data);
      await insertNoteImage(imageName, insertedImageId);
    } else {
      imageName = "No images";
    }

    //Tener en cuenta que si no viene una imagen se debe dejar la imagen anterior (si la hay)

    const updatedNote = { ...note, ...req.body };

    await editNoteById(updatedNote);
    res.status(200).send({ status: "ok", data: updatedNote });
  } catch (error) {
    next(error);
  }
};
module.exports = editNote;
