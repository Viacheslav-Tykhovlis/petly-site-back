const { Pet } = require("../../schemas/pet");
const { User } = require("../../schemas/user");

const addPet = async (req, res) => {
  const owner = req.user.id;
  const petData = req.body;
  const data = { owner, ...petData };
  // const data = !req.file
  //   ? { photo: req.file.path, owner, ...petData }
  //   : { owner, ...petData };

  Pet.create(data)
    .then((pet) => {
      if (pet) {
        User.findByIdAndUpdate(owner, { $push: { userAddPet: pet._id } })
          .then((user) => {
            if (user) {
              res.status(201).json({ success: true, pet });
            }
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    })
    .catch((err) =>
      res.status(400).json({ success: false, error: err, message: err.message })
    );
};

module.exports = addPet;
