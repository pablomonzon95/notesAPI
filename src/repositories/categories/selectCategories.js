const getPool = require("../../database/getPool");

const selectCategories = async () => {
  const pool = getPool();
  const [categories] = await pool.query("SELECT * from categories");

  return categories;
};
module.exports = selectCategories;
