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

    await pool.query(`
        INSERT INTO users (email, password) VALUES 
        ("pablo@email.com", "${await bcrypt.hash("123456", 10)}" ),
        ("juan@email.com", "${await bcrypt.hash("123456", 10)}" ),
        ("maria@email.com", "${await bcrypt.hash("123456", 10)}"),
        ("jorge@email.com", "${await bcrypt.hash("123456", 10)}"),
        ("luis@email.com", "${await bcrypt.hash("123456", 10)}")
        `);

    console.log("Inserting categories...");
    await pool.query(`INSERT INTO categories (name) VALUES
('hogar'),('escuela'),('deportes')`);
    console.log("Inserting notes...");

    await pool.query(`
        INSERT INTO notes (title, description,categoryId, userId) VALUES 
        ("Examen de Sql", "Tengo que repasar los join",2,1),
        ("Examen Back", "Tengo que repasar los modulos de node",2,1),
        ("Veterinario toby", "Ponerle la vacuna al perro",1,1),
        ("Ir al gimnasio", "4 veces por semana durante 2 horas",3,1),
        ("Salir a correr", "Esta semana tengo que empezar",3,2),
        ("Ir a comprar", "Tengo que comprar los regalos de navidad",1,2),
        ("Examen de ingles", "I need to improve my english ",2,2),
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
