const { selectPublicNotes } = require("../../repositories/notes");
const {selectPublicImageById} = require("../../repositories/images")
const { noteIdSchema } = require("../../schemas/notes");
const { generateError } = require("../../utils");
/**
 * Función que devuelve todas las notas marcadas como públicas (no se requiere estar logueado).
 */

const getPublicNotes = async (req, res, next) => {
  try {
    const notes = await selectPublicNotes();
    console.log(notes);

    res.status(200).send({ status: "ok", data: notes });
  } catch (error) {
    next(error);
  }
};
const getPublicNotesImages = async (req, res, next) => {
  try {
    const { id } = req.params;
    await noteIdSchema.validateAsync(id);
    const publicImage = await selectPublicImageById(id);
    if (!publicImage) {
      generateError("Image doesnt exists", 404);
    }
    res.status(200).send(publicImage);
  } catch (error) {
    next(error)
  }
};
module.exports = { getPublicNotes, getPublicNotesImages };
