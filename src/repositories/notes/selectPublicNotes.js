const getPool = require("../../database/getPool");

const selectPublicNotes = async () => {
  const pool = getPool();
  const [notes] = await pool.query(
    "SELECT * FROM notes WHERE public LIKE TRUE"
  );

  return notes;
};
module.exports = selectPublicNotes;
