const { categorySchema } = require("../../schemas/categories");
const { insertCategory } = require("../../repositories/categories");
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
