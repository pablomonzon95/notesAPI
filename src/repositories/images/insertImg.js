const getPool = require("../../database/getPool");

const insertImg = async (image, imageData) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    `INSERT INTO images (image, imageData) VALUES (?, ?)`,
    [image, imageData]
  );
  return insertId;
};

module.exports = insertImg;
