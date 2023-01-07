//Aqui guardamos todos los middlewares para que puedan ser importados en el server.js

const handleError = require("./handleError");
const handleNotFound = require("./handleNotFound");
const validateAuth = require("./validateAuth");
const checkAdmin = require("./checkAdmin");
module.exports = { handleError, handleNotFound, validateAuth, checkAdmin };
