const express = require("express");
const { userController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/signup", ctrlWrapper(userController.signup));
authRouter.post("/signin", ctrlWrapper(userController.login));
authRouter.get("/logout", authMiddleware, ctrlWrapper(userController.logout));

module.exports = authRouter;
