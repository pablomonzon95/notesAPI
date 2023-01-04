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
        INSERT INTO users (email, password, role) VALUES 
        ("pablo@email.com", "${await bcrypt.hash("123456", 10)}","admin" ),
        ("juan@email.com", "${await bcrypt.hash("123456", 10)}","normal" ),
        ("maria@email.com", "${await bcrypt.hash("123456", 10)}","normal"),
        ("jorge@email.com", "${await bcrypt.hash("123456", 10)}","normal"),
        ("luis@email.com", "${await bcrypt.hash("123456", 10)}","normal")
        `);

    console.log("Inserting categories...");
    await pool.query(`INSERT INTO categories (name, userId) VALUES
('hogar',1),('escuela',3),('deportes',2)`);
    console.log("Inserting notes...");

    await pool.query(`
        INSERT INTO notes (title, note, public, categoryId, userId) VALUES 
        ("Examen de Sql", "Tengo que repasar los join",false,2,1),
        ("Examen Back", "Tengo que repasar los modulos de node",true,2,1),
        ("Veterinario toby", "Ponerle la vacuna al perro",false,1,1),
        ("Ir al gimnasio", "4 veces por semana durante 2 horas",true,3,1),
        ("Salir a correr", "Esta semana tengo que empezar",false,3,2),
        ("Ir a comprar", "Tengo que comprar los regalos de navidad",false,1,2),
        ("Examen de ingles", "I need to improve my english ",false,2,2),
        ("Lista de compra", "Tomates, lechugas y manzanas",false,1,3)
    `);

    console.log("¡All done! 🤗");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
