const express = require("express");
const { authController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
// const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const authRouter = express.Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.put(
  "/change",
  authMiddleware,
  uploadCloud.single("avatarUrl"),
  authController.updateUser
);
authRouter.get("/logout", authMiddleware, authController.logout);

module.exports = authRouter;
