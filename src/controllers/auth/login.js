const bcrypt = require("bcrypt");
const { User } = require("../../schemas/user");
const { authSchema } = require("../../schemas/joi");
const {getTokens} = require("../../controllers/user/refresh");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { error } = authSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    const user = await User.findOne({ email });
    const userPassword = await bcrypt.compare(password, user.password);
    if (!user || !userPassword) {
      return res.status(401).json({ message: "Email or password is wrong" });
    }

    // if (!user.verify) {
    //   return res.status(401).json({ message: "Your Email is not verifyied!" });
    // }

    const { accessToken, refreshToken } = getTokens(user._id);

    const userUpdated = await User.findByIdAndUpdate(user._id, {
      accessToken,
      refreshToken,
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      accessToken: accessToken,
      refreshToken: refreshToken,
      data: {
        userUpdated,
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = login;

// const { User } = require("../../schemas/user");
// const { authSchema } = require("../../schemas/joi");
// const bcrypt = require("bcrypt");
// const getTokens = require("../../services/getTokens");

// async function login(req, res) {
//   const { email, password } = req.body;
//   const { error } = authSchema.validate(req.body);

//   if (error) {
//     return res
//       .status(400)
//       .json({ message: "Validate error, wrong email or password" });
//   }

//   const user = await User.findOne({ email });

//   if (!user) {
//     return res
//       .status(401)
//       .json({ message: "User does not exist, please register" });
//   }

//   const userPassword = await bcrypt.compare(password, user.password);

//   if (!userPassword) {
//     return res.status(401).json({ message: "Password is wrong" });
//   }

//   const userUpdated = await User.findOne({ email });

//   const { accessToken, refreshToken } = getTokens(user._id);

//   return res.status(200).json({
//     status: "success",
//     code: 200,
//     refreshToken,
//     accessToken,
//     data: {
//       userUpdated,
//       accessToken,
//     },
//   });
// }

// module.exports = login;
