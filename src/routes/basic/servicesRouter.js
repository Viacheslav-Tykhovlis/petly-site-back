const express = require("express");
const { news, servicesSidebar } = require("../../controllers/services");

const servicesRouter = express.Router();

// 1. створити ендпоінт для отримання контактної інформації про сервіси які надають послуги(захаркодить перелік новин в базу данних)
servicesRouter.get("/servicessidebar", servicesSidebar);

// 2. створити ендпоінт для отримання новин(захаркодить перелік новин в базу данних)
servicesRouter.get("/news", news);

module.exports = servicesRouter;
