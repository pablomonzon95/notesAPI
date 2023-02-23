const getPool = require("../../database/getPool");

const insertNote = async (insertedNote) => {
  const { title, note, imageName, public, categoryId, userId } = insertedNote;

  const pool = getPool();

  if (public === undefined) {
    const [{ insertId }] = await pool.query(
      "INSERT INTO notes (title,note,image,categoryId,userId)VALUES(?,?,?,?,?)",
      [title, note, imageName, categoryId, userId]
    );
    return insertId;
  } else {
    const [{ insertId }] = await pool.query(
      "INSERT INTO notes (title,note,image,public,categoryId,userId)VALUES(?,?,?,?,?,?)",
      [title, note, imageName, public, categoryId, userId]
    );
    return insertId;
  }
};
module.exports = insertNote;
