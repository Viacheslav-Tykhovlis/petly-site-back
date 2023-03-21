const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const {
  getAll,
  addPet,
  removeById,
} = require("../../controllers/pets/petsControlers");
// const { validation } = require("../../middlewares/validation");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const petsRouter = express.Router();

// const { joiSchema } = require("../../schemas/pet");

petsRouter.get("/", ctrlWrapper(getAll));

// створити ендпоінт для додавання карточки тварини користувача
petsRouter.post("/pet", uploadCloud.single("image"), ctrlWrapper(addPet));

// створити ендпоінт для видалення карточки з твариною користувача
petsRouter.delete("/:petId", ctrlWrapper(removeById));

module.exports = petsRouter;
