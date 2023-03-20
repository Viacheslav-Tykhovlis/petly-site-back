const express = require("express");
const userRouter = express.Router();

// 12. створити ендпоінт для отримання:
// -  особистої інформації про користувача, з коллекції users
// - інформації про тварин корисувача, з коллекції pets.
// userRouter.get("/user/about", authMiddleware, aboutUser);

module.exports = userRouter;
