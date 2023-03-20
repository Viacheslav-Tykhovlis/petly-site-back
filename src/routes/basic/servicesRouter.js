const express = require("express");
const {
  aboutUser,
  aboutUserPets,
  servicesSidebar,
  news,
  // petRegister,
  // noticesSelected,
} = require("../../controllers/notices/noticesControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
// const { uploadCloud } = require("../../middlewares/uploadCloud");

const servicesRouter = express.Router();
// servicesRouter.use(authMiddleware);

// 1. створити ендпоінт для отримання контактної інформації про сервіси які надають послуги(захаркодить перелік новин в базу данних)
servicesRouter.get("/servicessidebar", servicesSidebar);

// 2. створити ендпоінт для отримання новин(захаркодить перелік новин в базу данних)
servicesRouter.get("/news", news);

// servicesRouter.post(
//   "/addImage",
//   authMiddleware,
//   uploadCloud.single("image"),
//   petRegister
// );

// 12. створити ендпоінт для отримання  особистої інформації про користувача, з коллекції users
// 13. інформації про тварин корисувача, з коллекції pets.
servicesRouter.get("/user/about", authMiddleware, aboutUser);
servicesRouter.get("/user/aboutuserPets", authMiddleware, aboutUserPets);

module.exports = servicesRouter;
