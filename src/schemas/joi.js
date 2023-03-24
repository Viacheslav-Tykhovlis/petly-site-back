const Joi = require("joi");

const authSchema = Joi.object({
  name: Joi.string(),
  password: Joi.string().trim().min(7).max(32).required(),
  email: Joi.string().trim().email().required(),
});

module.exports = {
  authSchema,
};
