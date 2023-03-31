const express = require("express");
const userRouter = express.Router();
const { userController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const { refresh } = require("../../controllers/user/refresh");
// const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
// const { uploadCloud } = require("../../middlewares/uploadCloud");


// 12. створити ендпоінт для отримання:
// -  особистої інформації про користувача, з коллекції users
// - інформації про тварин корисувача, з коллекції pets.

userRouter.get("/about", authMiddleware, userController.aboutUserEndPets);
userRouter.post("/refresh", refresh);
userRouter.post("/current", authMiddleware, userController.current);

module.exports = userRouter;
