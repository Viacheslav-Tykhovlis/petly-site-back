const { Pet } = require("../../schemas/pet");
const { NotFound } = require("http-errors");

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

module.exports = removeById;
