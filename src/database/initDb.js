require("dotenv").config();
const getPool = require("./getPool");

// Función que crea desde cero la DB con todas sus tablas

const initDb = async () => {
  try {
    const pool = getPool();
    await pool.query(`CREATE DATABASE IF NOT EXISTS api_notes;`);
    await pool.query(`USE api_notes;`);

    console.log("Database created");

    console.log("Deleting tables...");

    await pool.query("DROP TABLE IF EXISTS notes;");
    await pool.query("DROP TABLE IF EXISTS categories;");
    await pool.query("DROP TABLE IF EXISTS users;");
    await pool.query("DROP TABLE IF EXISTS images;");

    console.log("Creating users table...");

    await pool.query(`
        CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            role ENUM("admin","normal") DEFAULT "normal",
            registrationCode VARCHAR(100)
        );
    `);

    console.log("Creating categories table...");

    await pool.query(`
        CREATE TABLE categories (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(50) NOT NULL
        );
    `);
    console.log("Creating images table...");
    await pool.query(`
        CREATE TABLE images (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            image VARCHAR(200) NOT NULL, 
            imageData LONGBLOB NOT NULL
             );
        `);

    console.log("Creating notes table...");

    await pool.query(`
        CREATE TABLE notes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            note VARCHAR(5000) NOT NULL,
            imageId INT UNSIGNED ,
            public BOOLEAN NOT NULL DEFAULT FALSE,
            categoryId INT UNSIGNED NOT NULL,
            userId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE CASCADE,
            FOREIGN KEY (imageId) REFERENCES images (id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
          );
          
        
    `);

    console.log("¡All done!🌠");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

initDb();
