const { Notice } = require("../../schemas/notices");
// const { User } = require("../../schemas/user");

const addNoticeToFav = async (req, res) => {
  const { noticeId } = req.params;
  const { favorite } = req.body;
  const result = await Notice.findByIdAndUpdate(
    noticeId,
    { $push: { favorite } },
    {
      new: true,
    }
  );
  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({ status: "success", code: 200, data: result });
};

module.exports = { addNoticeToFav };
