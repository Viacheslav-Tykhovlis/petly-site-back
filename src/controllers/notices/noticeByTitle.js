const { Notice } = require("../../schemas/notices");

const noticeByTitle = async (req, res, next) => {
  const { title } = req.params;
  const pattern = title;

  try {
    const result = await Notice.find(
      {
        title: { $regex: pattern, $options: "i" },
      },
      { name: 0, sex: 0, comments: 0, owner: 0 }
    );

    return res.status(200).json({
      message: "list of notices by title",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { noticeByTitle };
