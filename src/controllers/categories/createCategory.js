const { categorySchema } = require("../../schemas/categories");
const { insertCategory } = require("../../repositories/categories");

/*Función que se encarga de validar la estructura del body de la petición e insertar en la base de datos la nueva categoria llamando al repositorio correspondiente, devuelve los datos de la nueva categoria creada.*/

const createCategory = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await categorySchema.validateAsync(req.body);
    const { name } = req.body;
    const idCategory = await insertCategory({ name });
    res.status(200).send({
      status: "ok",
      data: {
        idCategory,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createCategory;
