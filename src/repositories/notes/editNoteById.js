const getPool = require("../../database/getPool");

const editNoteById = async (noteToUpdate) => {
  const { id, title, note, image, categoryId } = noteToUpdate;
  const pool = getPool();

  await pool.query(
    "UPDATE notes SET title = ?, note = ?,image = ? , categoryId = ? WHERE id = ? ",
    [title, note, image, categoryId, id]
  );
};
module.exports = editNoteById;
