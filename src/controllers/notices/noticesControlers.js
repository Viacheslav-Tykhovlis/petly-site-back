async function aboutUser(req, res, next) {
  try {
    return res.status(200).json({
      user: {
        email: "aboutUser",
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


module.exports = { aboutUser, aboutUserPets, servicesSidebar, news };
