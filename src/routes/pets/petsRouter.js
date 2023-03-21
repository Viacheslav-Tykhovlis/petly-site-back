const express = require("express");

const { login } = require("../../controllers/auth/authControlers");

const { addPet, removeById } = require("../../controllers/pets");

const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { validation } = require("../../middlewares/validation");

const { joiSchema } = require("../../schemas/pet");

const petsRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача
petsRouter.post("/pet", ctrlWrapper(login), ctrlWrapper(addPet));

// створити ендпоінт для видалення карточки з твариною користувача
petsRouter.delete("/:petId", validation(joiSchema), ctrlWrapper(removeById));

module.exports = petsRouter;
