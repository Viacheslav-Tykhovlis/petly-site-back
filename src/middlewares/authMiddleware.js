const jwt = require("jsonwebtoken");
const { User } = require("../schemas/user");
const { ACCESS_SECRET_KEY } = process.env;

// Написати прошарок авторизації
const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer" || !token) {
      return res.status(401).json({
        message: "invalid token",
        clarification:
          "Please, provide a token in request authorization header",
      });
    }
    const { id } = jwt.verify(token, ACCESS_SECRET_KEY);
    if (!id) {
      return res.status(401).json({
        message: "token expired",
        clarification: "Token not have id",
      });
    }
    const user = await User.findById(id);
    if (!user || !user.accessToken) {
      return res.status(401).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "authMiddleware catch",
      clarification: "Invalid token",
      error,
    });
  }
};

module.exports = {
  authMiddleware,
};
