const { selectPublicNotes } = require("../../repositories/notes");

const getPublicNotes = async (req, res, next) => {
  try {
    const notes = await selectPublicNotes();

    res.status(200).send({ status: "ok", data: notes });
  } catch (error) {
    next(error);
  }
};
module.exports = getPublicNotes;
