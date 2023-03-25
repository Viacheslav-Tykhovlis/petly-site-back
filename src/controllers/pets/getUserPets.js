// const { Pet } = require("../../schemas/pet");
const { User } = require("../../schemas/user");
// const { NotFound } = require("http-errors");

const getUserPets = async (req, res) => {

     const { _id: contactId } = req.user;
     const user = req.user;
      const allUserPets = await User.findById(contactId).populate(
        "userAddPet",
        {
          name: 1,
          birthday: 1,
          breed: 1,
          photo: 1,
          comments: 1,
        }
      );
    
res.json({
  status: "success",
  code: 200,
  allUserPets,
  user,
});
};

module.exports = getUserPets;
