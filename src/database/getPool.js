const mysql = require("mysql2/promise");

// Nos traemos los datos de la DB del .env
const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

let pool;

// Cuando llamemos a la función getPool, si no existe un pool todavía, crea uno y nos los da. Si ya existe, nos los da directamente
const getPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      timezone: "Z",
    });
  }

  return pool;
};

module.exports = getPool;
