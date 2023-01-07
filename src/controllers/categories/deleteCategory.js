const { generateError } = require("../../utils");
const { noteIdSchema } = require("../../schemas/notes");
const {
  selectCategoryById,
  deleteCategoryById,
} = require("../../repositories/categories");

/**Función que valida el id pasado como parámetro, verifica que exista la categoria y de ser así la elimina, devuelve una confirmación de la eliminación. */

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await noteIdSchema.validateAsync(id);

    const category = await selectCategoryById(id);
    if (!category) {
      generateError("Category doesnt exists", 404);
    }

    await deleteCategoryById(id);
    res
      .status(200)
      .send({ status: "ok", message: "Category deleted succesfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteCategory;
