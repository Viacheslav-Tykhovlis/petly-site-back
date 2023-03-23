const { User } = require("../../schemas/user");

async function aboutUser(req, res, next) {
  try {
    const { email } = req.user;

    const newUser = await User.findOne({ email });

    return res.status(201).json({
      status: "update secessful",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = aboutUser;
