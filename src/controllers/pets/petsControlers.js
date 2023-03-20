const { Pet } = require("../../schemas/pet");
const { NotFound } = require("http-errors");

const getAll = async (req, res, next) => {
  const pets = await Pet.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      pets,
    },
  });
};

async function addPet(req, res, next) {
  const { name, place, theSex, email, phone, price } = req.body;

  const credential = {
    name,
    place,
    theSex,
    email,
    phone,
    price,
  };
  const result = await Pet.create(credential);
  console.log(result);
  if (!result) {
    return res.status(401).json({ message: "news not found" });
  }

  return res.status(200).json(result);
}
const removeById = async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId, req.body);

  if (!result) {
    throw new NotFound(`Pet with id = ${petId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = {
  getAll,
  addPet,
  removeById,
};
