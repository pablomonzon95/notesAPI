const getPool = require("../../database/getPool");

const selectNotes = async (id) => {
  const pool = getPool();
  const [note] = await pool.query("SELECT * FROM notes WHERE userId = ?", [id]);

  return note;
};
module.exports = selectNotes;
