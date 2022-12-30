require("dotenv").config();
const getPool = require("./getPool");

// Función que crea desde cero todas las tablas de la DB

const initDb = async () => {
  try {
    const pool = getPool();

    console.log("Deleting tables...");

    await pool.query("DROP TABLE IF EXISTS users;");
    await pool.query("DROP TABLE IF EXISTS notes;");
    await pool.query("DROP TABLE IF EXISTS categories;");

    console.log("Creating users table...");

    await pool.query(`
        CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            registrationCode VARCHAR(100)
        );
    `);

    console.log("Creating notes table...");

    await pool.query(`
        CREATE TABLE notes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            description VARCHAR(5000) NOT NULL,
            userId INT UNSIGNED NOT NULL,
            categoryId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (CategoryId) REFERENCES categories (id) ON DELETE CASCADE
        );
    `);

    console.log("Creating categories table...");

    await pool.query(`
        CREATE TABLE categories (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(50) NOT NULL
        );
    `);




    console.log("¡All done! 🚀");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

initDb();
