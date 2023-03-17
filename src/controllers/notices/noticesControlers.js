async function aboutUser(req, res, next) {
  try {
    const { email } = req.body;
    return res.status(200).json({
      user: {
        email,
        router: "aboutUser",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function aboutUserPets(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "aboutUserPets",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function servicesSidebar(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "servicesSidebar",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function news(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "news",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function noticesByTitle(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "noticesByTitle",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function noticesByCategory(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "noticesByCategory",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function addNotices(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "addNotices",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function deleteNoticesByID(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "deleteNoticesByID",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function addNoticesSelected(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "addNoticesSelected",
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  aboutUser,
  aboutUserPets,
  servicesSidebar,
  news,
  noticesByTitle,
  noticesByCategory,
  addNotices,
  deleteNoticesByID,
  addNoticesSelected,
};
