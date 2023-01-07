//Aqui guardamos los repositorios de categorias para ser importados en los controllers.

const insertCategory = require("./insertCategory");
const selectCategoryById = require("./selectCategoryById");
const deleteCategoryById = require("./deleteCategoryById");

module.exports = { insertCategory, selectCategoryById, deleteCategoryById };
