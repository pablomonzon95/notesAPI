const getPool = require("../../database/getPool");

const insertUser = async (user) => {
  const { email, encryptedPassword, registrationCode } = user;
  const pool = getPool();
  const [{ insertId }] = await pool.query(
    "INSERT INTO users (email, password, registrationCode) VALUES (?,?,?)",
    [email, encryptedPassword, registrationCode]
  );

  return insertId;
};

module.exports = insertUser;
