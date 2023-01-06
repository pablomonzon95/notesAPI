const getPool = require("../../database/getPool");

const insertNoteImage = async (imageName, idNote) => {
  const pool = getPool();
  await pool.query("UPDATE notes SET image = ? WHERE id = ?", [
    imageName,
    idNote,
  ]);
};
module.exports = insertNoteImage;
