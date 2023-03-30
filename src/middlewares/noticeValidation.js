const Joi = require("joi");

const noticeValidation = (req, res, next) => {
  const schema = Joi.object({
    category: Joi.string().valid("sell", "lost-found", "for-free").required(),
    title: Joi.string()
      .min(2)
      .max(48)
      .pattern(new RegExp("[A-Za-zА-Яа-я]"))
      .required(),
    name: Joi.string().min(2).max(16).pattern(new RegExp("[A-Za-zА-Яа-я]")),
    birthdate: Joi.string().default(""),
    breed: Joi.string().min(2).max(24).pattern(new RegExp("[A-Za-zА-Яа-я]")),
    sex: Joi.string().valid("male", "female").required(),
    location: Joi.string().required(),
    price: Joi.number().default(0),
    image: Joi.string(),
    comments: Joi.string().min(8).max(120).pattern(new RegExp("[^0-9]")),
  });

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details,
      code: 400,
    });
  }

  next();
};

module.exports = { noticeValidation };
