const { Pet } = require("../../schemas/pet");

async function aboutUserEndPets(req, res) {
  const { user } = req;

  const allUserPets = await Pet.find(
    { owner: user._id },
    {
      name: 1,
      birthday: 1,
      breed: 1,
      photo: 1,
      comments: 1,
    }
  );
  const newUser = user;
  return res.status(200).json({
    data: {
      allUserPets,
      newUser,
    },
  });
}

module.exports = aboutUserEndPets;
