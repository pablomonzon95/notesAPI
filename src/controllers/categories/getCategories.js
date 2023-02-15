const { selectCategories  } = require("../../repositories/categories");

/**
 * Función que devuelve todas las notas marcadas como públicas (no se requiere estar logueado).
 */

const getCategories= async (req, res, next) => {
  try {
    const categories = await selectCategories();
  

    res.status(200).send({ status: "ok", data: categories });
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories ;
