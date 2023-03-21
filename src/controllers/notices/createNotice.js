const { Notice } = require("../../schemas/notices");

const createNotice = async (req, res, next) => {
  // const { _id } = req.user;
  const { id } = req.params;

  const {
    category,
    title,
    name,
    birthdate,
    breed,
    sex,
    location,
    comments,
    price,
    image,
    favorite,
  } = req.body;

  try {
    const newNotice = {
      category,
      title,
      name,
      birthdate,
      breed,
      sex,
      location,
      comments,
      price,
      image,
      favorite,
      owner: id,
      // owner: _id,
    };

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
