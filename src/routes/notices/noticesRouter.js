const express = require("express");

const { authMiddleware } = require("../../middlewares/authMiddleware");
const { noticeValidation } = require("../../middlewares/noticeValidation");
// const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const {
  createNotice,
  noticeById,
  noticeByTitle,
  noticesByCategory,
  noticeDeleteById,
  noticesByOwner,
  addNoticeToFav,
  deleteNoticeFromFav,
  getUserFavNotices,
} = require("../../controllers/notices");

const { uploadCloud } = require("../../middlewares/uploadCloud");

const noticesRouter = express.Router();

// створити ендпоінт для пошуку оголошеннь по заголовку
noticesRouter.get("/title/:title", authMiddleware, noticeByTitle);

// створити ендпоінт для отримання оголошень по категоріям
noticesRouter.get("/category/:category", authMiddleware, noticesByCategory);

// створити ендпоінт для отримання одного оголошення
noticesRouter.get("/noticeId/:noticeId", authMiddleware, noticeById);

// створити ендпоінт для додавання оголошення до обраних
noticesRouter.patch("/addFavorite/:noticeId", authMiddleware, addNoticeToFav);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
noticesRouter.get("/getFavorite", authMiddleware, getUserFavNotices);

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
noticesRouter.patch(
  "/delFavorite/:noticeId",
  authMiddleware,
  deleteNoticeFromFav
);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
noticesRouter.post(
  "/create",
  authMiddleware,
  uploadCloud.single("image"),
  noticeValidation,
  createNotice
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
noticesRouter.get("/userNotices", authMiddleware, noticesByOwner);

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
noticesRouter.delete("/delete/:noticeId", authMiddleware, noticeDeleteById);

module.exports = noticesRouter;
