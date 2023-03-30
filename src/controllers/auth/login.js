const { User } = require("../../schemas/user");
const { authSchema } = require("../../schemas/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function login(req, res) {
  const { email, password } = req.body;
  const { error } = authSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: "Validate error, wrong email or password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(401)
      .json({ message: "User does not exist, please register" });
  }

  const userPassword = await bcrypt.compare(password, user.password);

  if (!userPassword) {
    return res.status(401).json({ message: "Password is wrong" });
  }

  const payload = {
    id: user._id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "1m",
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "5m",
  });

  const userUpdated = await User.findOne({ email });

  return res.status(200).json({
    status: "success",
    code: 200,
    refreshToken,
    accessToken,
    data: {
      userUpdated,
      accessToken,
    },
  });
}

module.exports = login;
