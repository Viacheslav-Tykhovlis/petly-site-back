const { Schema, model } = require("mongoose");

const Joi = require("joi");

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for pet"],
    },
    birthday: {
      type: String,
    },
    breed: {
      type: String,
    },
    place: {
      type: String,
      required: [true, "Set location for pet"],
    },
    theSex: {
      type: String,
      required: [true, "Set gender for pet"],
    },
    email: {
      type: String,
      unique: [true, "You already have contact with this email"],
    },
    phone: {
      type: String,
      required: [true, "You already have contact with this contact"],
    },
    price: {
      type: Number,
      required: true,
      min: 0.01,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  // birthday: Joi.string(),
  // breed: Joi.string(),
  place: Joi.string().required(),
  theSex: Joi.string().required(),
  phone: Joi.string().min(10).max(14).required(),
  email: Joi.string().email().required(),
  price: Joi.number().min(0.01).required(),
});

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  joiSchema,
};
