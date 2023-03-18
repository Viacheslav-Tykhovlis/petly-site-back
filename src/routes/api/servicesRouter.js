const express = require("express");
const {
  aboutUser,
  aboutUserPets,
  servicesSidebar,
  addSponsor,
  noticesByTitle,
  noticesByCategory,
  addNotices,
  deleteNoticesByID,
  addNoticesSelected,
  addNew,
  sponsors,
  news,
  petRegister,
  // noticesSelected,
} = require("../../controllers/notices/noticesControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const servicesRouter = express.Router();
// servicesRouter.use(authMiddleware);

// 1. створити ендпоінт для отримання контактної інформації про сервіси які надають послуги(захаркодить перелік новин в базу данних)
// 2. створити ендпоінт для отримання новин(захаркодить перелік новин в базу данних)
servicesRouter.get("/servicessidebar", authMiddleware, servicesSidebar);
servicesRouter.get("/news", authMiddleware, news);
servicesRouter.get("/sponsors", authMiddleware, sponsors);
servicesRouter.post("/new", authMiddleware, addNew);
servicesRouter.post("/sponsor", authMiddleware, addSponsor);


servicesRouter.post(
  "/",
  authMiddleware,
  uploadCloud.single("image"),
  petRegister
);

// 3. створити ендпоінт для пошуку оголошеннь по заголовку
// 5. створити ендпоінт для отримання одного оголошення
// 4. створити ендпоінт для отримання оголошень по категоріям
// 7. створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
// 10. створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
// 8. створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
// 9. створити ендпоінт для додавання оголошень відповідно до обраної категорії
// 6. створити ендпоінт для додавання оголошення до обраних
// 11. створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем

servicesRouter.get("/noticesByTitle", authMiddleware, noticesByTitle);
servicesRouter.get("/notices", authMiddleware, noticesByCategory);
servicesRouter.post("/notices", authMiddleware, addNotices);
servicesRouter.delete("/:noticesId", authMiddleware, deleteNoticesByID);
servicesRouter.post("/notices_selected", authMiddleware, addNoticesSelected);

// 12. створити ендпоінт для отримання  особистої інформації про користувача, з коллекції users
// 13. інформації про тварин корисувача, з коллекції pets.
servicesRouter.get("/user/about", authMiddleware, aboutUser);
servicesRouter.get("/user/aboutuserPets", authMiddleware, aboutUserPets);

module.exports = servicesRouter;
