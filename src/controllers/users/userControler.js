async function current(req, res, next) {
  try {
    const { email } = req.user;
    return res.status(200).json({
      user: {
        email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = current;
