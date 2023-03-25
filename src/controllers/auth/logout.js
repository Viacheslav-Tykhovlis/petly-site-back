const { User } = require("../../schemas/user");

async function logout(req, res) {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, {
    accessToken: null,
  });
  return res.status(204).json();
}

module.exports = logout;
