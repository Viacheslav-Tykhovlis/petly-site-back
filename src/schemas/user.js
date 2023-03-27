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
      required: [true, "Email is required"],
      unique: true,
      match: [/[a-z0-9]+@[a-z0-9]+/, "user email is not valid!"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    birthday: {
      type: Date,
      default: null,
    },
    phone: {
      type: Number,
      default: null,
    },
    city: {
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
    userLikePets: [],
    userAddPet: [{ type: Schema.Types.ObjectId, ref: "userAddPet" }],
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
