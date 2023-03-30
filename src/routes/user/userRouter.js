const express = require("express");
const userRouter = express.Router();
const { userController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { uploadCloud } = require("../../middlewares/uploadCloud");

// 12. створити ендпоінт для отримання:
// -  особистої інформації про користувача, з коллекції users
// - інформації про тварин корисувача, з коллекції pets.
// userRouter.get("/user/about", authMiddleware, aboutUser);

userRouter.get(
  "/about",
  authMiddleware,
  ctrlWrapper(userController.aboutUserEndPets)
);
userRouter.post(
  "/refresh",
  ctrlWrapper(userController.refresh)
);

userRouter.put(
  "/current",
  authMiddleware,
  uploadCloud.single("avatarUrl"),
  ctrlWrapper(userController.updateUser)
);

module.exports = userRouter;
