const { createNotice } = require("./createNotice");
const { noticeById } = require("./noticeById");
const { noticeByTitle } = require("./noticeByTitle");
const { noticesByCategory } = require("./noticesByCategory");
const { noticeDeleteById } = require("./noticeDeleteById");
const { noticesByOwner } = require("./noticesByOwner");
const { addNoticeToFav } = require("./addNoticeToFav");
const { deleteNoticeFromFav } = require("./deleteNoticeFromFav");
const { getUserFavNotices } = require("./getUserFavNotices");

module.exports = {
  createNotice,
  noticeById,
  noticeByTitle,
  noticesByCategory,
  noticeDeleteById,
  noticesByOwner,
  addNoticeToFav,
  deleteNoticeFromFav,
  getUserFavNotices,
};
