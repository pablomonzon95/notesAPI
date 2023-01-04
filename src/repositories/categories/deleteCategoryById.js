const getPool = require("../../database/getPool");

const deleteCategoryById = async (id) => {
  const pool = getPool();

  await pool.query("DELETE FROM categories WHERE id = ?", [id]);
};
module.exports = deleteCategoryById;
