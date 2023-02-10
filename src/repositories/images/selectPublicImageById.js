const getPool = require("../../database/getPool");

const selectPublicImageById = async (id) => {
  const pool = getPool();

  const [[image]]= await pool.query("SELECT * FROM images WHERE id = ?", [id]);
  return image;
};

module.exports = selectPublicImageById;
