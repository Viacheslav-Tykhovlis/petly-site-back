const Joi = require("joi");

const authSchema = Joi.object({
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string().email().required(),
});

// const refreshSchema = Joi.object({
//   refreshToken: Joi.string().required(),
// });

module.exports = {
  authSchema,
  // refreshSchema,
};
