const { User } = require("../../schemas/user");

async function authChange(req, res) {
  const credentials = req.body;
  const { _id: contactId } = req.user;

  const { name, birthday, phone, city, avatarUrl, email } =
    await User.findByIdAndUpdate(contactId, credentials, {
      new: true,
    });

  return res.status(201).json({
    status: "update secessful",
    name,
    birthday,
    phone,
    city,
    avatarUrl,
    email,
  });
}

module.exports = authChange;
