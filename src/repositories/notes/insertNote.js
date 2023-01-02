const getPool = require("../../database/getPool");

const insertNote = async (insertedNote) => {
  const { title, note, categoryId, userId } = insertedNote;
  const pool = getPool();
  const [{ insertId }] = await pool.query(
    "INSERT INTO notes (title,note,categoryId,userId)VALUES(?,?,?,?)",
    [title, note, categoryId, userId]
  );
  return insertId;
};
module.exports = insertNote;
