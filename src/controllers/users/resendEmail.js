// const { User } = require("../../schemas/user");
// const sendEmail = require("../../services/sendEmail");
// const { v4: uuidv4 } = require("uuid");

// async function resendEmail(req, res, next) {
//   try {
//     const { email } = req.body;
//     const verificationToken = uuidv4();
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "missing required field email" });
//     }

//     if (user.verify) {
//       return res
//         .status(400)
//         .json({ message: "Verification has been already passed" });
//     }

//     await User.findByIdAndUpdate(user._id, {
//       verificationToken,
//     });

//     await sendEmail(email, verificationToken);
//     return res.status(200).json({ message: "Verification email sended" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// module.exports = resendEmail;
