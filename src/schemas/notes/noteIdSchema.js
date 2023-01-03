const Joi = require("joi");

const noteIdSchema = Joi.number().positive().required();

module.exports = noteIdSchema;
