/**
 * Aqui guardamos todos los controllers de categorias.
 */

const createCategory = require("./createCategory");
const deleteCategory = require("./deleteCategory");
const getCategories = require("./getCategories")
module.exports = { createCategory, deleteCategory, getCategories };
