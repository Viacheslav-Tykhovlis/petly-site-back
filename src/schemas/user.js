const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    // refreshToken: {
    //   type: String,
    //   default: null,
    // },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
