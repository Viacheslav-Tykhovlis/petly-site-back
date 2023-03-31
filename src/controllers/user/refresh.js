const jwt = require("jsonwebtoken");
const { User } = require("../../schemas/user");
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;
// const { refreshSchema } = require("../../schemas/joi");

const getTokens = (id) => {
  const payload = {
    id,
  };
  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "24h",
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "5m",
  });
  return { accessToken, refreshToken };
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken: token } = req.body;
    const { accessToken: asseToken } = req.body;


    // const { error } = refreshSchema.validate(req.body);

    // if (error) {
    //   return res.status(403).json({ message: "Wrong token" });
    // }
    const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
    const isExist = await User.findById(id);
    if (!isExist) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    const { accessToken, refreshToken } = getTokens(id);
    console.log("accessToken", asseToken === accessToken);
    if (asseToken === accessToken) {
      return res.status(404).json({ message: "accessToken is the same" });
    }
    console.log("refreshToken", token === refreshToken);
    if (token === refreshToken) {
      return res.status(404).json({ message: "refreshToken is the same" });
    }
    return res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { refresh, getTokens };
