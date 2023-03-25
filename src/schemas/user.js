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
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    birthday: {
      type: Date,
      default: null,
    },
    tel: {
      type: Number,
      default: null,
    },
    region: {
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
    userAddPet: [{ type: Schema.Types.ObjectId, ref: "userAddPet" }],
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
