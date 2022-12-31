require("dotenv").config();
const getPool = require("./getPool");
const bcrypt = require("bcrypt");

//Funcion que inserta datos de prueba en la DB

const populateDb = async () => {
  try {
    const pool = getPool();
    await pool.query(`
       USE api_notes;
    `);
    console.log("Inserting users...");

    /*  await pool.query(`
        INSERT INTO users (email, password) VALUES 
        ("pablo@email.com", "${await bcrypt.hash("123456", 10)}" ),
        ("juan@email.com", "${await bcrypt.hash("123456", 10)}" ),
        ("maria@email.com", "${await bcrypt.hash("123456", 10)}")
    `); */
    await pool.query(`
        INSERT INTO users (email, password) VALUES 
        ("pablo@email.com", "123456"),
        ("juan@email.com", "123456"),
        ("maria@email.com", "123456")
    `);

    console.log("Inserting categories...");
    await pool.query(`INSERT INTO categories (name) VALUES
('hogar'),('escuela'),('deportes')`);
    console.log("Inserting notes...");

    await pool.query(`
        INSERT INTO notes (title, description,categoryId, userId) VALUES 
        ("Examen de Sql", "Tengo que repasar los join",2,1),
        ("Rutina de gimnasio", "Esta semana toca trabajar el tren superior",3,2),
        ("Lista de compra", "Tomates, lechugas y manzanas", 1,3)
    `);

    console.log("¡All done! 🤗");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
