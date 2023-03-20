const { Sponsors } = require("../../schemas/sponsors");

async function servicesSidebar(req, res, next) {
  const result = await Sponsors.find();
  if (!result) {
    return res.status(401).json({ message: "news not found" });
  }

  return res.status(200).json(result);
}

module.exports = servicesSidebar;
