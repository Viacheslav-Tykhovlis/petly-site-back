const { Notice } = require("../../schemas/notices");

const noticesByCategory = async (req, res, next) => {
  const { category } = req.params;

  try {
    const result = await Notice.find(
      { category: category },
      { name: 0, sex: 0, comments: 0, owner: 0 }
    );

    return res.status(200).json({
      message: "list of notices by category",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { noticesByCategory };
