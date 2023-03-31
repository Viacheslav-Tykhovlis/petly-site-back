const { Schema, model } = require("mongoose");

const Joi = require("joi");

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for pet"],
      min: 2,
      max: 16,
    },
    birthday: {
      type: Date,
      required: [true, "Set in the format: dd.mm.yyyy"],
      trim: true,
    },
    breed: {
      type: String,
      required: true,
      min: 2,
      max: 16,
    },
    photo: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
      min: 8,
      max: 120,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.date().required(),
  breed: Joi.string().min(2).max(16).required(),
  photo: Joi.string().required(),
  comments: Joi.string().min(8).max(120).required(),
});

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  joiSchema,
};
