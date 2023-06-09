const { Schema, model } = require("mongoose");

const noticeSchema = Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost-found", "for-free"],
      default: "sell",
    },
    title: {
      type: String,
      required: [true, "Set notice title"],
    },
    name: {
      type: String,
      required: [true, "Set name for pet"],
    },
    birthdate: {
      type: String,
      default: "null",
    },
    breed: {
      type: String,
    },
    sex: {
      type: Array,
    },
    location: {
      type: String,
    },
    comments: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

module.exports = { Notice };
