const { User } = require("../../schemas/user");

const deleteNoticeFromFav = async (req, res) => {
  const { _id } = req.user;
  const { noticeId } = req.params;

  const result = await User.updateOne(
    { _id },
    { $pull: { userLikePets: noticeId } }
  );

  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "notice deleted to favorites",
  });
};

module.exports = { deleteNoticeFromFav };
