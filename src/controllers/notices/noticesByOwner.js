const { Notice } = require("../../schemas/notices");

const noticesByOwner = async (req, res, next) => {
  const { _id } = req.user;

  try {
    const result = await Notice.find({ owner: _id });

    // if (!result.length) {
    //   return res.status(404).json({
    //     message: "this user has no notices",
    //     code: 404,
    //   });
    // }

    return res.status(200).json({
      message: "user notices",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { noticesByOwner };
