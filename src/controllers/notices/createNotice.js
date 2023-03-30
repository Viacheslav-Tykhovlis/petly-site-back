const { Notice } = require("../../schemas/notices");

const createNotice = async (req, res, next) => {
  const { _id } = req.user;
  const notice = req.body;

  const newNotice = !!req.file
    ? { image: req.file.path, owner: _id, ...notice }
    : { owner: _id, ...notice };

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
  }
};

module.exports = { createNotice };
