const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notices");

const addNoticeToFav = async (req, res) => {
  const { _id } = req.user;
  const { noticeId } = req.params;

  const result = await User.updateOne(
    { _id },
    { $push: { userLikePets: noticeId } }
  );

  const notice = await Notice.findById(noticeId, {
    name: 0,
    sex: 0,
    comments: 0,
    createdAt: 0,
    updatedAt: 0,
    owner: 0,
  });

  if (!result) {
    const error = new Error(`Not found`);
    error.status = 404;
    throw error;
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "notice added to favorites",
    data: notice,
  });
};

module.exports = { addNoticeToFav };
