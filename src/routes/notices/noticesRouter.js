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
} = require("../../controllers/notices");

const { uploadCloud } = require("../../middlewares/uploadCloud");

const noticesRouter = express.Router();

// створити ендпоінт для пошуку оголошеннь по заголовку
noticesRouter.get("/title/:title", ctrlWrapper(noticeByTitle));

// створити ендпоінт для отримання оголошень по категоріям
noticesRouter.get("/category/:category", ctrlWrapper(noticesByCategory));

// створити ендпоінт для отримання одного оголошення
noticesRouter.get("/noticeId/:noticeId", ctrlWrapper(noticeById));

// створити ендпоінт для додавання оголошення до обраних
// ? patch favorite, auth middleware
noticesRouter.patch(
  "/:noticeId/favorite",
  authMiddleware,
  ctrlWrapper(addNoticeToFav)
);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// ? get favorite, auth middleware

// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// ? patch favorite, auth middleware

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
//  в контроллере заменить {id} = req.params на {_id} = req.user и ниже по коду тоже
// ПРОВЕРЕН
noticesRouter.post(
  "/create",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("image"),
  noticeValidation,
  ctrlWrapper(createNotice)
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
// ПРОВЕРЕН
noticesRouter.get("/userNotices", authMiddleware, ctrlWrapper(noticesByOwner));

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
//  ***************  authMiddleware - вставить в роут, как будет готово ****************
noticesRouter.delete(
  "/delete/:noticeId",
  authMiddleware,
  ctrlWrapper(noticeDeleteById)
);

module.exports = noticesRouter;
