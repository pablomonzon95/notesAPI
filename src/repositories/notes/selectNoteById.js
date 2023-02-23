const getPool = require("../../database/getPool");

const selectNoteById = async (id) => {
  const pool = getPool();

  const [[note]] = await pool.query("SELECT *  FROM notes WHERE id = ?", [id]);

  return note;
};
module.exports = selectNoteById;
