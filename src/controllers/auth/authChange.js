const { User } = require("../../schemas/user");
const jwt = require("jsonwebtoken");

async function authChange(req, res, next) {
  const { REFRESH_SECRET_KEY } = process.env;
  console.log(REFRESH_SECRET_KEY);

  const { refreshToken: token } = req.body;

   const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
  const oldBody = await User.findOne({ _id: id });

  console.log(oldBody);
  try {

    return res.status(201).json({
      status: "success",
      code: 201,
      oldBody,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
