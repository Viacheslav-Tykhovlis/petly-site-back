// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { User } = require("../../schemas/user");
// const { authSchema } = require("../../schemas/joi");

// const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

// async function login(req, res, next) {
//   try {
//     const { email, password } = req.body;
//     const { error } = authSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: "Wrong email or password" });
//     }

//     const user = await User.findOne({ email });
//     const userPassword = await bcrypt.compare(password, user.password);
//     if (!user || !userPassword) {
//       return res.status(401).json({ message: "Email or password is wrong" });
//     }

//     if (!user.verify) {
//       return res.status(401).json({ message: "Your Email is not verifyied!" });
//     }

//     const payload = {
//       id: user._id,
//     };
//     const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
//       expiresIn: "24h",
//     });
//     const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
//       expiresIn: "7d",
//     });

//     await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

//     return res.status(200).json({
//       status: "success",
//       code: 200,
//       accessToken: accessToken,
//       refreshToken: refreshToken,
//       user: {
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// module.exports = login;
