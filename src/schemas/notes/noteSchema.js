const Joi = require("joi");

const noteSchema = Joi.object({
  title: Joi.string().max(100).required(),
  note: Joi.string().max(5000).required(),
  categoryId: Joi.number().positive().required(),
  public: Joi.boolean(),
});
module.exports = noteSchema;
