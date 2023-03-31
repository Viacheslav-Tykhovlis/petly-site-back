const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { addPet, removeById } = require("../../controllers/pets");
// const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const petsRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача
petsRouter.post("/pet", authMiddleware, uploadCloud.single("photo"), addPet);

// створити ендпоінт для видалення карточки з твариною користувача
petsRouter.delete("/:petId", removeById);

module.exports = petsRouter;
