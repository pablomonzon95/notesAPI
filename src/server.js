require("dotenv").config();
const fileUpload = require("express-fileupload");
const { createUser, activateUser, loginUser } = require("./controllers/users");
const {
  getNotes,
  createNote,
  getNote,
  editNote,
  deleteNote,
  getPublicNotes,
} = require("./controllers/notes");

const { createCategory, deleteCategory } = require("./controllers/categories");
const express = require("express");

const {
  handleError,
  handleNotFound,
  validateAuth,
  checkAdmin,
} = require("./middlewares");

const app = express();

app.use(express.json());
app.use(fileUpload());

const { PORT } = process.env;

//ENDPOINTS DE USUARIOS

//Crea un nuevo usuario
app.post("/users", createUser);
//Activa el usuario creado
app.get("/activate/:registrationCode", activateUser);
//Loguea al usuario y genera un token
app.post("/login", loginUser);

//ENDPOINTS DE NOTAS

//Crea una nota nueva al usuario logueado
app.post("/notes", validateAuth, createNote);
//Devuelve la lista de notas del usuario logueado (solo títulos)
app.get("/notes", validateAuth, getNotes);
//Devuelve la nota completa con ese id
app.get("/note/:id", validateAuth, getNote);
//Edita una nota (título, contenido de la nota o ambos)
app.put("/note/:id", validateAuth, editNote);
//Borra una nota
app.delete("/note/:id", validateAuth, deleteNote);
//Devuelve todas la notas públicas(no se require estar logueado)
app.get("/public", getPublicNotes);

//ENDPOINTS DE CATEGORÍAS

//Crea una categoría (cualquier usuario registrado puede crear una categoría)
app.post("/categories", validateAuth, createCategory);
//Borra una categoría (sólo los usuarios con el role de admin pueden borrar categorías)
app.delete("/categories/:id", validateAuth, checkAdmin, deleteCategory);

// Middlware 404. Solo las peticiones que no coincidan con ningún endpoint van a llegar aquí
app.use(handleNotFound);

// Middleware de errores. Si algún endpoint hace un next(error), la petición viene directamente a este middleware
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
