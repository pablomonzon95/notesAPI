//Aqui guardamos funciones útiles necesarias en diversas partes de nuestro proyecto.

const generateError = require("./generateError");
const sendMail = require("./sendMail");
const processAndSaveImage = require("./processAndSaveImage");

module.exports = { generateError, sendMail, processAndSaveImage };
