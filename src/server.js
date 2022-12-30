require("dotenv").config();

const express = require('express');


const app = express();

app.use(express.json());

// VER DESPUES PORQUE NO TOMA EL PUERTO DEL ENV. const { PORT } = process.env;
//crear base de datos (usuarios, notas, categorias)
//hacer populate db
//endpoints

//USUARIOS ANONIMOS
//--registro (lo hacemos con mail)
//login


//USUARIOS REGISTRADOS
//get /notes (solo devuelve titulos);
//get /notes/:id (devuelve nota completa con imagen); ?query params 
//get /notes/? query params (para notas publicas)
// post /notes (crear una nota nueva);
// put /notes/:id
//delete /notes/:id


app.listen(8080, () => {
    console.log(`Server listening on http://localhost:8080`);
  });
