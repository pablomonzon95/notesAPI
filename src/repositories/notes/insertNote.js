const getPool = require("../../database/getPool");

const insertNote = async (insertedNote) => {
  const { title, note, insertedImageId, public, categoryId, userId } =
    insertedNote;
  console.log(insertedImageId);
  const pool = getPool();

  if (public === undefined) {
    const [{ insertId }] = await pool.query(
      "INSERT INTO notes (title,note,imageId,categoryId,userId)VALUES(?,?,?,?,?)",
      [title, note, insertedImageId, categoryId, userId]
    );
    return insertId;
  } else {
    const [{ insertId }] = await pool.query(
      "INSERT INTO notes (title,note,imageId,public,categoryId,userId)VALUES(?,?,?,?,?,?)",
      [title, note, insertedImageId, public, categoryId, userId]
    );
    return insertId;
  }
};
module.exports = insertNote;
