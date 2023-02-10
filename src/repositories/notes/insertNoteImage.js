const getPool = require("../../database/getPool");

const insertNoteImage = async (imageName, insertedImageId) => {
  const pool = getPool();

  await pool.query("UPDATE images SET image = ? WHERE id = ?", [
    imageName,
    insertedImageId,
  ]);
};
module.exports = insertNoteImage;
