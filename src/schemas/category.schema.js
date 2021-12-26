const Joi = require("joi");

const id = Joi.string().max(2);
const name = Joi.string();

const categorySchema = Joi.object({
  name: name.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { categorySchema, getCategorySchema };
