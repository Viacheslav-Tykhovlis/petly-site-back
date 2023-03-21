const { Notice } = require("../../schemas/notices");

const noticeByTitle = async (req, res, next) => {
  const { title } = req.params;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const result = await Notice.find({ title: title }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id name email phone");

    if (!result.length) {
      return res.status(404).json({
        message: "no data found",
        code: 404,
      });
    }
    return res.status(200).json({
      message: "list of notices by title",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // next(error);
  }
};

module.exports = { noticeByTitle };
