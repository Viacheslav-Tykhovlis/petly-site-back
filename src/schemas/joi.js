const Joi = require("joi");

const authSchema = Joi.object({
  password: Joi.string().trim().min(7).max(32).required(),
  email: Joi.string().trim().email().required(),
});

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  authSchema,
  refreshSchema,
};
