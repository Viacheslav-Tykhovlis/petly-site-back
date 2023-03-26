const express = require("express");
const userRouter = express.Router();
const { aboutUserEndPets } = require("../../controllers/user");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

// 12. створити ендпоінт для отримання:
// -  особистої інформації про користувача, з коллекції users
// - інформації про тварин корисувача, з коллекції pets.
// userRouter.get("/user/about", authMiddleware, aboutUser);

userRouter.get("/about", authMiddleware, ctrlWrapper(aboutUserEndPets));

module.exports = userRouter;
