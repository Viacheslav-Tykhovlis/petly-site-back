const { News } = require("../../schemas/news");

async function news(req, res, next) {
  const result = await News.find();
  if (!result) {
    return res.status(401).json({ message: "news not found" });
  }

  return res.status(200).json(result);
}

module.exports = news;
