const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().max(200).required(),
});
module.exports = categorySchema;
