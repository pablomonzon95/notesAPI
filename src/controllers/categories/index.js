/**
 * Aqui guardamos todos los controllers de categorias.
 */

const createCategory = require("./createCategory");
const deleteCategory = require("./deleteCategory");
const getCategories = require("./getCategories");
const getNotesByCategory = require("./getNotesByCategory");
module.exports = {
  createCategory,
  deleteCategory,
  getCategories,
  getNotesByCategory,
};
