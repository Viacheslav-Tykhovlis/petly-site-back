const { Notice } = require("../../schemas/notices");

const noticesByCategory = async (req, res, next) => {
  const { category } = req.params;
  // const { page = 1, limit = 20 } = req.query;
  // const skip = (page - 1) * limit;

  // , "", {
  //     skip,
  //     limit: Number(limit),
  //   }

  try {
    const result = await Notice.find(
      { category: category },
      { name: 0, sex: 0, comments: 0, createdAt: 0, updatedAt: 0, owner: 0 }
    );
    // .populate("owner", "_id name email phone");

    if (!result.length) {
      return res.status(404).json({
        message: "no data found",
        code: 404,
      });
    }
    return res.status(200).json({
      message: "list of notices by category",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // next(error);
  }
};

module.exports = { noticesByCategory };
