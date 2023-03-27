const { Notice } = require("../../schemas/notices");

const noticeById = async (req, res, next) => {
  const { noticeId } = req.params;

  try {
    const result = await Notice.findById(noticeId).populate(
      "owner",
      "_id name email phone"
    );

    if (result) {
      return res.json({
        message: "notice by id",
        code: 200,
        data: result,
      });
    }

    return res.status(404).json({
      message: "no notices by this id found",
      code: 404,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { noticeById };
