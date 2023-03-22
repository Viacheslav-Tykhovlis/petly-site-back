// const { User } = require("../../schemas/user");
// const { authSchema } = require("../../schemas/joi");
// const bcrypt = require("bcrypt");
// const { v4: uuidv4 } = require("uuid");

async function authChange(req, res, next) {
  try {
//     const { email, password, Phone, Birthday, name, avatarUrl, City } =
//       req.body;
//     const { error } = authSchema.validate(req.body);

//     if (error) {
//       console.log(error);
//       res.status(400).json({ message: "Invalid value of email or password" });
//       return;
//     }
//     const userCheck = await User.findOne({ email });
//     if (userCheck) {
//       res.status(409).json({ message: "Email in use" });
//       return;
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const verificationToken = uuidv4();

//     const newUser = await User.create({
//       email,
//       password: hashedPassword,
//       Phone,
//       Birthday,
//       name,
//       avatarUrl,
//       City,
//       verificationToken,
//     });
    // return res.status(201).json({
    //   status: "success",
    //   code: 201,
    //   user: {
    //     email: newUser.email,
    //     password,
    //     Phone,
    //     Birthday,
    //     name,
    //     avatarUrl,
    //     City,
    //   },
        return res.status(201).json({
          status: "authChange success",
        });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
