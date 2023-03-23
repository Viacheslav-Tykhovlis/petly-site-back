const { User } = require("../../schemas/user");

async function authChange(req, res, next) {
  try {
    const credentials = req.body;
    const { _id: contactId } = req.user;

      const { name, Birthday, Phone, City, avatarUrl, email } =
        await User.findByIdAndUpdate(contactId, credentials, {
          new: true,
        });

    return res.status(201).json({
      status: "update secessful",
      name,
      Birthday,
      Phone,
      City,
      avatarUrl,
      email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authChange;
