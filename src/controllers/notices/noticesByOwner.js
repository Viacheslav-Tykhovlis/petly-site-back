const { Notice } = require("../../schemas/notices");

const noticesByOwner = async (req, res, next) => {
  // поменять соответствующие поля на это
  // const { _id } = req.user;
  //  const result = await Notice.findById({ owner: _id });

  const { userId } = req.params;
  console.log(userId);

  try {
    const result = await Notice.find(
      { owner: userId },
      { name: 0, sex: 0, comments: 0, createdAt: 0, updatedAt: 0, owner: 0 }
    );

    if (!result.length) {
      return res.status(404).json({
        message: "this user has no contacts",
        code: 404,
      });
    }

    return res.status(200).json({
      message: "user notices",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // next(error);
  }
};

module.exports = { noticesByOwner };
