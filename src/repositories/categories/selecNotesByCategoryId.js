const getPool = require("../../database/getPool");

const selectNotesByCategoryId = async (id) => {
  const pool = getPool();
  const [notes] = await pool.query(
    "SELECT * FROM notes n JOIN categories c ON n.categoryId = c.id WHERE c.id = ?; ",
    [id]
  );
  console.log(notes);
  return notes;
};
module.exports = selectNotesByCategoryId;
