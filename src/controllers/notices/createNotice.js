const { Notice } = require("../../schemas/notices");

const createNotice = async (req, res, next) => {
  // поменять соответствующие поля на это
  // const { _id } = req.user;
  // или
  // const owner = req.user.id;
  const { id } = req.params;
  const notice = req.body;

  const newNotice = !!req.file
    ? { image: req.file.path, owner: id, ...notice }
    : { owner: id, ...notice };

  try {
    const result = new Notice(newNotice);
    await result.save();

    return res.status(201).json({
      message: "notice created",
      code: 201,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // next(error);
  }
};

module.exports = { createNotice };

// const {
//   category,
//   title,
//   name,
//   birthdate,
//   breed,
//   sex,
//   location,
//   comments,
//   price,
//   // image,
//   favorite,
// } = req.body;

// const newNotice = {
//   category,
//   title,
//   name,
//   birthdate,
//   breed,
//   sex,
//   location,
//   comments,
//   price,
//   image: req.file.path,
//   favorite,
//   owner: id,
//   // owner: _id,
// };
