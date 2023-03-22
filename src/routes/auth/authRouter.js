const express = require("express");
const { userController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/signup", ctrlWrapper(userController.signup));
authRouter.post("/login", ctrlWrapper(userController.login));
authRouter.post(
  "/change",
  authMiddleware,
  ctrlWrapper(userController.authChange)
);
authRouter.get("/logout", authMiddleware, ctrlWrapper(userController.logout));

module.exports = authRouter;
