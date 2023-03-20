const express = require("express");
const {
  signup,
  login,
  logout,
} = require("../../controllers/auth/authControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

// створити ендпоінтт реєстрації користувача
authRouter.post("/signup", ctrlWrapper(signup));

// створити ендпоінт логінізації користувача
authRouter.post("/signin", ctrlWrapper(login));

// створити ендпоінт для оновлення данних користувача або одного з полів контактної інформації про користувача

// створити ендпоінт для логаута користувача
authRouter.get("/logout", authMiddleware, ctrlWrapper(logout));

module.exports = authRouter;
