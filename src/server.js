require("dotenv").config();
const { createUser } = require("./controllers/users");
const express = require("express");

const { handleError, handleNotFound } = require("./middlewares");
const app = express();

app.use(express.json());

const { PORT } = process.env;

//crear base de datos (usuarios, notas, categorias)
//hacer populate db
//endpoints

//USUARIOS ANONIMOS
//--registro (lo hacemos con mail)
//login
app.post("/users", createUser);

//USUARIOS REGISTRADOS
//get /notes (solo devuelve titulos);
//get /notes/:id (devuelve nota completa con imagen); ?query params
//get /notes/? query params (para notas publicas)
// post /notes (crear una nota nueva);
// put /notes/:id
//delete /notes/:id

// Middlware 404. Solo las peticiones que no coincidan con ningún endpoint van a llegar aquí
app.use(handleNotFound);

// Middleware de errores. Si algún endpoint hace un next(error), la petición viene directamente a este middleware
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
