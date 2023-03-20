const express = require("express");
const {
  noticesByTitle,
  noticesByCategory,
  addNotices,
  deleteNoticesByID,
} = require("../../controllers/notices/noticesControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const noticesRouter = express.Router();

// створити ендпоінт для пошуку оголошеннь по заголовку
noticesRouter.get("/noticesByTitle", noticesByTitle);

// створити ендпоінт для отримання оголошень по категоріям
noticesRouter.get("/noticesByCategory", noticesByCategory);

// створити ендпоінт для отримання одного оголошення
// створити ендпоінт для додавання оголошення до обраних
// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// створити ендпоінт для додавання оголошень відповідно до обраної категорії
noticesRouter.post("/notices", authMiddleware, addNotices);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
noticesRouter.delete("/:noticesId", deleteNoticesByID);

// noticesRouter.post("/notices_selected", addNoticesSelected);

module.exports = noticesRouter;
