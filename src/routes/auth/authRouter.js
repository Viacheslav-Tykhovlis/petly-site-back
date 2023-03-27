const express = require("express");
const { authController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const authRouter = express.Router();

authRouter.post("/signup", ctrlWrapper(authController.signup));
authRouter.post("/login", ctrlWrapper(authController.login));
authRouter.patch(
  "/change",
  authMiddleware,
  uploadCloud,
  ctrlWrapper(authController.authChange)
);
authRouter.get("/logout", authMiddleware, ctrlWrapper(authController.logout));

module.exports = authRouter;
