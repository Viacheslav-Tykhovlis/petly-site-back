const { User } = require("../../schemas/user");

const getUserFavNotices = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);

  const favorites = await User.find({ _id }, "userLikePets").populate(
    "userLikePets",
    { name: 0, sex: 0, comments: 0, createdAt: 0, updatedAt: 0, owner: 0 }
  );

  // if (!favorites.length) {
  //   const error = new Error(`Not found`);
  //   error.status = 404;
  //   throw error;
  // }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "list of favorite notices by user id",
    data: favorites,
  });
};

module.exports = { getUserFavNotices };
