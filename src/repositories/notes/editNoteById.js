const getPool = require("../../database/getPool");

const editNoteById = async (noteToUpdate) => {
  const { id, title, note, imageId, public, categoryId } = noteToUpdate;
  const pool = getPool();

  await pool.query(
    "UPDATE notes SET title = ?, note = ?,imageId = ? , public = ?, categoryId = ? WHERE id = ? ",
    [title, note, imageId, public, categoryId,  id]
  );
};
module.exports = editNoteById;
