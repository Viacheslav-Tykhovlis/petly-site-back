const { User } = require("../../schemas/user");
const bcrypt = require("bcrypt");

async function signup(req, res) {
  const { email, password, phone, birthday, name, avatarUrl, city } = req.body;
  const emailToLoWerCase = email.toLowerCase();

  const userCheck = await User.findOne({ email: emailToLoWerCase });
  if (userCheck) {
    res.status(409).json({ message: "Email in use" });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    email: emailToLoWerCase,
    password: hashedPassword,
    phone,
    birthday,
    name,
    avatarUrl,
    city,
  });
  return res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email: newUser.email,
      password,
      phone,
      birthday,
      name,
      avatarUrl,
      city,
    },
  });
}

module.exports = signup;
