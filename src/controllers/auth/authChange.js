const { User } = require("../../schemas/user");

async function authChange(req, res, next) {
  try {
    const credentials = req.body;
    const { accessToken } = req.user;
    console.log(accessToken);

    const oldUser = await User.findOne({accessToken});

    const newUser = await User.create({
      ...credentials,
      ...oldUser,
    });
    return res.status(201).json({
      status: "authChange success",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
