const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().min(5).max(100).required(),
  password: Joi.string().min(5).max(20).required(),
});

module.exports = userSchema;
