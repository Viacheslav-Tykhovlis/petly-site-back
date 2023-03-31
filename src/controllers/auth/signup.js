const bcrypt = require("bcrypt");
const { User } = require("../../schemas/user");

async function signup(req, res) {
  const { email, password } = req.body;
  const emailToLoWerCase = email.toLowerCase();
  try {
    const userCheck = await User.findOne({ email: emailToLoWerCase });
    if (userCheck) {
      res.status(409).json({ message: "Email in use" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      user: {
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = signup;
