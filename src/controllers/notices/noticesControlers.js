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

async function petRegister(req, res, next) {
  // const owner = req.user.id;
  // const petData = req.body;
  // const data = !!req.file
  //   ? { avatarURL: req.file.path, owner, ...petData }
  //   : { owner, ...petData };
  // Pet.create(data)
  //   .then((pet) => {
  //     if (pet) {
  //       User.findByIdAndUpdate(owner, { $push: { userPets: pet._id } })
  //         .then((user) => {
  //           if (user) {
  //             res.status(201).json({ success: true, pet });
  //           }
  //         })
  //         .catch((err) => {
  //           throw new Error(err);
  //         });
  //     }
  //   })
  //   .catch((err) =>
  //     res.status(400).json({ success: false, error: err, message: err.message })
  //   );
}

module.exports = {
  noticesByTitle,
  noticesByCategory,
  addNotices,
  deleteNoticesByID,
  addNoticesSelected,
  petRegister,
};
