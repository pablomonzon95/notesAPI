/**
 * Guardamos los controllers de los usuarios para que sean importados desde el server.js
 */
const createUser = require("./createUser");
const activateUser = require("./activateUser");
const loginUser = require("./loginUser");

module.exports = { createUser, activateUser, loginUser };
