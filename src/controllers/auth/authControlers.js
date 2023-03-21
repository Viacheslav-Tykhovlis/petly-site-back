const { User } = require("../../schemas/user");
const { authSchema } = require("../../schemas/joi");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY } = process.env;

async function signup(req, res, next) {
  try {
    const { email, password } = req.body;
    const { error } = authSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: "Invalid value of email or password" });
      return;
    }
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      res.status(409).json({ message: "Email in use" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = uuidv4();

    const newUser = await User.create({
      email,
      password: hashedPassword,
      verificationToken,
    });
    return res.status(201).json({
      status: "success",
      code: 201,
      user: {
        email: newUser.email,
        password,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

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

    const payload = {
      id: user._id,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "24h",
    });
    await User.findByIdAndUpdate(user._id, { accessToken });

    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function logout(req, res, next) {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, {
      accessToken: null,
    });
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signup,
  login,
  logout,
};
