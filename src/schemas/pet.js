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
      type: String,
      required: [true, "Set in the format: dd-mm-yyyy"],
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
      // type: Schema.Types.ObjectId,
      // ref: "Image",
    },
    comments: {
      type: String,
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
  birthday: Joi.date().less(Date.now()).format("dd-mm-yyyy").required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).required(),
});

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  joiSchema,
};
