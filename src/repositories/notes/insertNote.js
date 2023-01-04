const getPool = require("../../database/getPool");

const insertNote = async (insertedNote) => {
  const { title, note, public, categoryId, userId } = insertedNote;
  const pool = getPool();
  const [{ insertId }] = await pool.query(
    "INSERT INTO notes (title,note,public,categoryId,userId)VALUES(?,?,?,?,?)",
    [title, note, public, categoryId, userId]
  );
  return insertId;
};
module.exports = insertNote;
