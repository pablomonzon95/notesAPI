const getPool = require("../../database/getPool");

const deleteNoteById = async (id) => {
  const pool = getPool();
  await pool.query("DELETE FROM notes WHERE id = ?", [id]);
};
module.exports = deleteNoteById;
