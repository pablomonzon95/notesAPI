const getPool = require("../../database/getPool");

const insertCategory = async (category) => {
  const { name } = category;
  const pool = getPool();
  const [{ insertId }] = await pool.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name]
  );
  return insertId;
};

module.exports = insertCategory;
