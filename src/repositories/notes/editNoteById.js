const getPool = require("../../database/getPool");

const editNoteById = async (noteToUpdate) => {
  const { id, title, note, categoryId } = noteToUpdate;
  const pool = getPool();

  await pool.query(
    "UPDATE notes SET title = ?, note = ?, categoryId = ? WHERE id = ? ",
    [title, note, categoryId, id]
  );
};
module.exports = editNoteById;
