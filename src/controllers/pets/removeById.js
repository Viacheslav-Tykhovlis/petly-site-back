const { Pet } = require("../../schemas/pet");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { petId } = req.params;
  const owner = req.user.id;

  const result = await Pet.findByIdAndRemove(petId, req.body);

  if (!result) {
    throw new NotFound(`Pet with id = ${petId} not found`);
  }
  const allUserPets = await Pet.find(
    { owner: owner },
    { name: 1, birthday: 1, breed: 1, photo: 1, comments: 1 }
  );
  res.json({ success: true, allUserPets });
};

module.exports = removeById;
