const Joi = require("joi");

const editNoteSchema = Joi.object({
  title: Joi.string().max(100),
  note: Joi.string().max(5000),
  categoryId: Joi.number().positive(),
  public: Joi.boolean(),    
})
  .min(1)
  .messages({
    "object.min": "You need to include at least title, note or categoryId",
  });
module.exports = editNoteSchema;
