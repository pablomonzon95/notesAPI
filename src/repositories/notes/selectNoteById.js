const getPool = require("../../database/getPool");

const selectNoteById = async (id) => {
  const pool = getPool();

  const [[note]] = await pool.query(
    "SELECT n.* ,i.image,i.imageData FROM notes n LEFT JOIN images i ON n.imageId = i.id  WHERE n.id = ?",
    [id]
  );
  console.log(note);
  return note;
};
module.exports = selectNoteById;
