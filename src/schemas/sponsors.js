const { Schema, model, ObjectId } = require("mongoose");

const schemaSponsors = new Schema(
  {
    _id: {
      type: ObjectId,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    addressUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    workDays: [
      {
        from: {
          type: String,
        },
        to: {
          type: String,
        },
        isOpen: { type: Boolean },
      },
    ],
  },
  { versionKey: false }
);

const Sponsors = model("sponsors", schemaSponsors);

module.exports = {
  Sponsors,
};
