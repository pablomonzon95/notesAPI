const getPool = require("../../database/getPool");

const editNoteById = async (noteToUpdate) => {
  const { id, title, note, image, public, categoryId } = noteToUpdate;
  const pool = getPool();

  await pool.query(
    "UPDATE notes SET title = ?, note = ?,image = ? , public = ?, categoryId = ? WHERE id = ? ",
    [title, note, image, public, categoryId,  id]
  );
};
module.exports = editNoteById;
