const { Pet } = require("../../schemas/pet");

async function aboutUserEndPets(req, res) {
  const { user } = req;

  const userWithPet = await Pet.find(
    { owner: user._id },
    {
      name: 1,
      birthday: 1,
      breed: 1,
      photo: 1,
      comments: 1,
    }
  );

  return res.status(200).json({
    data: {
      userWithPet,
    },
  });
}


module.exports = aboutUserEndPets;
