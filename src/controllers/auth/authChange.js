const { User } = require("../../schemas/user");

async function authChange(req, res, next) {
  try {
    const credentials = req.body;
    const { email } = req.user;

    const oldUser = await User.findOne({ email });

    const newUser = await User.create({
      ...credentials,
      ...oldUser,
    });
    return res.status(201).json({
      status: "update secessful",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
