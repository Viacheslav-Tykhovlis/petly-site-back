const { createNotice } = require("./createNotice");
const { noticeById } = require("./noticeById");
const { noticeByTitle } = require("./noticeByTitle");
const { noticesByCategory } = require("./noticesByCategory");

module.exports = { createNotice, noticeById, noticeByTitle, noticesByCategory };
