const { User } = require("../../schemas/user");

async function current(req, res, next) {
  try {
    const { _id } = req.user;

    const user = await User.findById(_id);

    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = current;
