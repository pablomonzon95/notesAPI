const { generateError } = require("../../utils");
const { noteIdSchema } = require("../../schemas/notes");
const { selectNoteById, deleteNoteById } = require("../../repositories/notes");
const path = require("path");
const fs = require("fs/promises");
/**
 * Función que valida la id recibida como parámetro, comprueba que la nota exista y que haya sido creada por el usuario logueado si todo se cumple, elimina la nota.En caso de tener una imagen tambien la elimina (tanto de la base de datos como de nuestro fichero).Devuelve un mensaje indicando que todo ha ido correctamente.
 */
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
    let imagePath;
    
    if (note.image) {
      if (note.image !== "No images") {
      imagePath = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "docs",
        "images",
        note.image
      );
      await fs.rm(imagePath);
    }}

    await deleteNoteById(id);

    res.status(200).send({ status: "ok", message: "Note deleted succesfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteNote;
