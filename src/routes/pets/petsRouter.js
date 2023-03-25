const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { addPet, removeById, getUserPets } = require("../../controllers/pets");

const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { validation } = require("../../middlewares/validation");

const { joiSchema } = require("../../schemas/pet");

const petsRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача

petsRouter.post(
  "/pet",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("image"),
  ctrlWrapper(addPet)
);

// petsRouter.post("/pet", uploadCloud.single("image"), ctrlWrapper(addPet));

// створити ендпоінт для видалення карточки з твариною користувача
petsRouter.delete("/:petId", validation(joiSchema), ctrlWrapper(removeById));
petsRouter.get(
  "/allUserPets",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(getUserPets)
);

module.exports = petsRouter;
