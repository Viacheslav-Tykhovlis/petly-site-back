const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    avatarUrl: {
      type: Number,
      default: '',
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    Birthday: {
      type: Number,
      required: [true, "Birthday is required"],
    },
    Phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    City: {
      type: String,
      required: [true, "City is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    accessToken: {
      type: String,
      default: null,
    },
    userLikePets: [{ type: Schema.Types.ObjectId, ref: "userLikePets" }],
    userOwnerPets: [{ type: Schema.Types.ObjectId, ref: "userOwnerPets" }],
    userAddPet: [{ type: Schema.Types.ObjectId, ref: "userAddPet" }],
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
