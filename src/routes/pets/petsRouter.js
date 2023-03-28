const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { addPet, removeById } = require("../../controllers/pets");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
// const { validation } = require("../../middlewares/validation");
// const { joiSchema } = require("../../schemas/pet");

const petsRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача
petsRouter.post(
  "/pet",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("photo"),
  ctrlWrapper(addPet)
);

// створити ендпоінт для видалення карточки з твариною користувача
petsRouter.delete("/:petId", ctrlWrapper(removeById));

module.exports = petsRouter;
