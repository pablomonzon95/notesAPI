const { selectNotes } = require("../../repositories/notes");

const getNotes = async (req, res, next) => {
  try {
    const { id } = req.auth;

    const notes = await selectNotes(id);
    const titles = [];
    for (const note of notes) {
      titles.push(note.title);
    }

    res.status(200).send({ status: "ok", data: titles });
  } catch (error) {
    next(error);
  }
};
module.exports = getNotes;