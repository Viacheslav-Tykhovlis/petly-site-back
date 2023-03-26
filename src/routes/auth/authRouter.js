const express = require("express");
const { authChange, login, signup, logout } = require("../../controllers/auth");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/signup", ctrlWrapper(signup));
authRouter.post("/login", ctrlWrapper(login));
authRouter.patch(
  "/change",
  authMiddleware,
  ctrlWrapper(authChange)
);
authRouter.get("/logout", authMiddleware, ctrlWrapper(logout));

module.exports = authRouter;
