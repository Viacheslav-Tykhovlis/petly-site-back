const { User } = require("../../schemas/user");

async function updateUser(req, res) {
  const { id } = req.user;
  const { name, email, birthday, phone, city } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      birthday,
      phone,
      city,
      avatarUrl: req?.file?.path,
    },
    {
      new: true,
      fields: {
        createdAt: 0,
        updatedAt: 0,
        accessToken: 0,
        password: 0,
        userLikePets: 0,
        userAddPet: 0,
      },
    }
  );

  return res.status(200).json(updatedUser);
}

module.exports = updateUser;
