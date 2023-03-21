const { Pet } = require("../../schemas/pet");

async function addPet(req, res, next) {
  const { name, birthday, breed, photo, comments } = req.body;

  const credential = {
    name,
    birthday,
    breed,
    photo,
    comments,
  };
  const result = await Pet.create(credential);
  console.log(result);
  if (!result) {
    return res.status(401).json({ message: "pet not found" });
  }

  return res.status(200).json(result);
}

module.exports = addPet;
