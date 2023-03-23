const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    Birthday: {
      type: Number,
      default: null,
    },
    Phone: {
      type: Number,
      default: null,
    },
    City: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
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
