const { selectNoteById } = require("../../repositories/notes");
const { noteIdSchema } = require("../../schemas/notes");
const { generateError } = require("../../utils");

/**
 * Función que valida el id recibido como parametro, verifica que exista la nota seleccionada y que pertenezca al usuario logueado.
 * De ser así devuelve todos los campos de la misma.
 */
const getNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    await noteIdSchema.validateAsync(id);

    const note = await selectNoteById(id);
    if (!note) {
      generateError("Note doesnt exists", 404);
    }
    const loggedUserId = req.auth.id;
    if (loggedUserId !== note.userId) {
      generateError("You dont have permission to see this note", 401);
    }
    res.status(200).send({ status: "ok", data: note });
  } catch (error) {
    next(error);
  }
};
module.exports = getNote;
