const { User } = require("../../schemas/user");

async function authChange(req, res, next) {
  const owner = req.user._id;
  const { Phone, Birthday, name, avatarUrl, City } = req.body;
  console.log(owner);
  try {
    const newUserawait = User.findByIdAndUpdate(owner, {
      Phone,
      Birthday,
      name,
      avatarUrl,
      City,
    });
    console.log(newUserawait);
    //   // const newUser = await User.create({
    //   //   Phone,
    //   //   Birthday,
    //   //   name,
    //   //   avatarUrl,
    //   //   City,
    //   // });
      return res.status(201).json({
        status: "success",
        code: 201,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
