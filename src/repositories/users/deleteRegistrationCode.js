const getPool = require("../../database/getPool");

const deleteRegistrationCode = async (registrationCode) => {
  const pool = getPool();

  await pool.query(
    "UPDATE users SET registrationCode = NULL WHERE registrationCode = ?",
    [registrationCode]
  );
};

module.exports = deleteRegistrationCode;
