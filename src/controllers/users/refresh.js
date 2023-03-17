// const jwt = require("jsonwebtoken");
// const { User } = require("../../schemas/user");
// const { refreshSchema } = require("../../schemas/joi");

// const refresh = async (req, res, next) => {
//   try {
//     const { refreshToken: token } = req.body;
//     const { REFRESH_SECRET_KEY, ACCESS_SECRET_KEY } = process.env;
//     const { error } = refreshSchema.validate(req.body);

//     if (error) {
//       return res.status(403).json({ message: "Wrong token" });
//     }
//     const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
//     const isExist = await User.findOne({ refreshToken: token });
//     if (!isExist) {
//       return res.status(403).json({ message: "Token is not valid" });
//     }

//     const payload = {
//       id,
//     };

//     const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
//       expiresIn: "2m",
//     });
//     const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
//       expiresIn: "7d",
//     });

//     return res.status(200).json({
//       accessToken,
//       refreshToken,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// module.exports = refresh;
