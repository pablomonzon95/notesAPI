const getPool = require("../../database/getPool");

const selectUserByRegistrationCode = async (registrationCode) => {
  const pool = getPool();

  const [[user]] = await pool.query(
    "SELECT * FROM users WHERE registrationCode = ?",
    [registrationCode]
  );

  return user;
};

module.exports = selectUserByRegistrationCode;