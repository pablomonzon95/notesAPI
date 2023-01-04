const getPool = require("../../database/getPool");

const selectCategoryById = async (id) => {
  const pool = getPool();

  const [[category]] = await pool.query(
    "SELECT * FROM categories WHERE id = ?",
    [id]
  );
  return category;
};
module.exports = selectCategoryById;
