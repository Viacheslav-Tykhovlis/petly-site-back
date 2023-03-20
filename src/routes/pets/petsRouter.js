const express = require("express");

const {
  getAll,
  addPet,
  removeById,
} = require("../../controllers/pets/petsControlers");
const { validation } = require("../../middlewares/validation");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const petsRouter = express.Router();

const { joiSchema } = require("../../schemas/pet");

petsRouter.get("/", ctrlWrapper(getAll));

petsRouter.post("/pet", ctrlWrapper(addPet));

petsRouter.delete("/:petId", ctrlWrapper(removeById));

module.exports = petsRouter;
