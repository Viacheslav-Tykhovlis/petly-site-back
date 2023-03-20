const express = require("express");
const {
  signup,
  // refresh,
  login,
  logout,
} = require("../../controllers/auth/authControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const authRouter = express.Router();

// створити ендпоінтт реєстрації користувача
authRouter.post("/signup", signup);

// створити ендпоінт логінізації користувача
authRouter.post("/login", login);

// створити ендпоінт для оновлення данних користувача або одного з полів контактної інформації про користувача

// створити ендпоінт для логаута користувача
authRouter.get("/logout", authMiddleware, logout);

module.exports = authRouter;
