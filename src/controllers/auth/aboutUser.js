const { User } = require("../../schemas/user");
const { Pet } = require("../../schemas/pet");

async function aboutUser(req, res) {
  try {
    const { email } = req.user;
    const { _id } = req.params;

    const newUser = await User.findOne({ email });
    const allUserPets = await Pet.find(
      { owner: _id },
      { name: 1, birthday: 1, breed: 1, photo: 1, comments: 1 }
    );

    return res.status(201).json({
      status: "successful",
      newUser,
      allUserPets,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = aboutUser;
