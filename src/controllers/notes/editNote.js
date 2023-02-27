const { generateError, processAndSaveImage } = require("../../utils");
const { editNoteSchema, noteIdSchema } = require("../../schemas/notes");
const { selectNoteById, editNoteById } = require("../../repositories/notes");
const path = require("path");
const fs = require("fs/promises");

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
    req.body.public;

    await editNoteSchema.validateAsync(req.body);
    req.body.public === "on"
      ? (req.body.public = true)
      : (req.body.public = false);

    let imageName;

    req.body.deleteImage;
    req.body.deleteImage === "on"
      ? (req.body.deleteImage = true)
      : (req.body.deleteImage = false);

    if (req.files) {
      const image = req.files.image;
      imageName = await processAndSaveImage(image.data);
    } else {
      if (
        (note.image !== null || note.image !== "No images") &&
        !req.body.deleteImage
      ) {
        imageName = note.image;
      } else {
        imageName = "No images";
      }
    }
    req.body.image = imageName;
    /* let imagePath;

    if (imageName) {
      if (imageName !== "No images") {
        imagePath = path.join(
          __dirname,
          "..",
          "..",
          "..",
          "docs",
          "images",
          imageName
        );
        await fs.rm(imagePath);
      }
    } */
    console.log(req.body);
    const updatedNote = { ...note, ...req.body };

    console.log(updatedNote);

    await editNoteById(updatedNote);
    res.status(200).send({ status: "ok", data: updatedNote });
  } catch (error) {
    next(error);
  }
};
module.exports = editNote;
