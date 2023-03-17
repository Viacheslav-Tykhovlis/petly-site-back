const { Schema, model } = require("mongoose");

const schemaNews = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const News = model("News", schemaNews);

module.exports = {
  News,
};
