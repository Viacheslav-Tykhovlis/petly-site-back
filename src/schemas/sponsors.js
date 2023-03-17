const { Schema, model } = require("mongoose");

const schemaSponsors = new Schema({
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
      type: {
        type: Boolean,
      },
      from: {
        type: String,
      },
      to: {
        type: String,
      },
    },
  ],
});

const Sponsors = model("sponsors", schemaSponsors);

module.exports = {
  Sponsors,
};
