const { selectPublicNotes } = require("../../repositories/notes");

/**
 * Función que devuelve todas las notas marcadas como públicas (no se requiere estar logueado).
 */

const getPublicNotes = async (req, res, next) => {
  try {
    const notes = await selectPublicNotes();

    res.status(200).send({ status: "ok", data: notes });
  } catch (error) {
    next(error);
  }
};
module.exports = getPublicNotes;
