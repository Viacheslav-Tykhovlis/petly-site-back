const express = require("express");

const { authMiddleware } = require("../../middlewares/authMiddleware");
const { noticeValidation } = require("../../middlewares/noticeValidation");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

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
// ПРОВЕРЕН
noticesRouter.get("/title/:title", ctrlWrapper(noticeByTitle));

// створити ендпоінт для отримання оголошень по категоріям
// ПРОВЕРЕН
noticesRouter.get("/category/:category", ctrlWrapper(noticesByCategory));

// створити ендпоінт для отримання одного оголошення
// ПРОВЕРЕН
noticesRouter.get("/noticeId/:noticeId", ctrlWrapper(noticeById));

// створити ендпоінт для додавання оголошення до обраних
// ПРОВЕРЕН
noticesRouter.patch(
  "/addFavorite/:noticeId",
  authMiddleware,
  ctrlWrapper(addNoticeToFav)
);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// ПРОВЕРЕН
noticesRouter.get(
  "/getFavorite",
  authMiddleware,
  ctrlWrapper(getUserFavNotices)
);

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// ПРОВЕРЕН
noticesRouter.patch(
  "/delFavorite/:noticeId",
  authMiddleware,
  ctrlWrapper(deleteNoticeFromFav)
);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
// ПРОВЕРЕН
noticesRouter.post(
  "/create",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("image"),
  noticeValidation,
  ctrlWrapper(createNotice)
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
// ПРОВЕРЕН
noticesRouter.get("/userNotices", authMiddleware, ctrlWrapper(noticesByOwner));

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
// ПРОВЕРЕН
noticesRouter.delete(
  "/delete/:noticeId",
  authMiddleware,
  ctrlWrapper(noticeDeleteById)
);

module.exports = noticesRouter;
