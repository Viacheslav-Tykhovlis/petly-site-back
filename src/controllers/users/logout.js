// const { User } = require("../../schemas/user");

// async function logout(req, res, next) {
//   try {
//     const { _id } = req.user;
//     await User.findByIdAndUpdate(_id, {
//       accessToken: null,
//       refreshToken: null,
//     });
//     return res.status(204).json(); // "Logout was successfull"
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// module.exports = logout;
