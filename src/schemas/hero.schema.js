const Joi = require("joi");

const id = Joi.string().max(2);
const name = Joi.string();
const hero = Joi.string();
const isBlock = Joi.boolean();

const heroSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  hero: hero.required(),
  isBlock: isBlock.required(),
});

const getHeroSchema = Joi.object({
  id: id.required(),
});

module.exports = { heroSchema, getHeroSchema };
