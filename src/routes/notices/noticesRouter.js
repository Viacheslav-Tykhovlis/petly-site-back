const express = require("express");

// const { authMiddleware } = require("../../middlewares/authMiddleware");
const { noticeValidation } = require("../../middlewares/noticeValidation");

const {
  createNotice,
  noticeById,
  noticeByTitle,
  noticesByCategory,
  noticeDeleteById,
  noticesByOwner,
} = require("../../controllers/notices");

const { uploadCloud } = require("../../middlewares/uploadCloud");

const noticesRouter = express.Router();

// створити ендпоінт для пошуку оголошеннь по заголовку
noticesRouter.get("/title/:title", noticeByTitle);

// створити ендпоінт для отримання оголошень по категоріям
noticesRouter.get("/category/:category", noticesByCategory);

// створити ендпоінт для отримання одного оголошення
noticesRouter.get("/noticeId/:noticeId", noticeById);

// створити ендпоінт для додавання оголошення до обраних
// ? patch favorite, auth middleware

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// ? get favorite, auth middleware

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// ? patch favorite, auth middleware

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
//  в контроллере заменить {id} = req.params на {_id} = req.user и ниже по коду тоже
noticesRouter.post(
  "/create/:id",
  uploadCloud.single("image"),
  noticeValidation,
  createNotice
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
noticesRouter.get("/userNotices/:userId", noticesByOwner);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
noticesRouter.delete("/delete/:noticeId", noticeDeleteById);

module.exports = noticesRouter;
