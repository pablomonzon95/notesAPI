//Aqui guardamos los repositorios de categorias para ser importados en los controllers.

const insertCategory = require("./insertCategory");
const selectCategoryById = require("./selectCategoryById");
const deleteCategoryById = require("./deleteCategoryById");
const selectCategories = require("./selectCategories");
const selectNotesByCategoryId = require("./selecNotesByCategoryId");
module.exports = {
  insertCategory,
  selectCategoryById,
  deleteCategoryById,
  selectCategories,
  selectNotesByCategoryId,
};
