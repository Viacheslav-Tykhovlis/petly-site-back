const queryString = require("querystring");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { ACCESS_SECRET_KEY, BASE_URL, FRONTEND_URL } = process.env;
const { User } = require("../../schemas/user");
const { v4: uuidv4 } = require("uuid");

const googleAuth = async (req, res) => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${BASE_URL}/auth/users/google-redirect`,
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
  });
  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  );
};

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = req.query.code || req.body.code || req.params.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${BASE_URL}/auth/users/google-redirect`,
      grant_type: "authorization_code",
      code: code,
    },
  });

  const userData = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  const { email } = userData.data;
  const user = await User.findOne({ email });
  if (user) {
    const payload = {
      id: user._id,
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "24h",
    });
    await User.findByIdAndUpdate(user._id, { accessToken });
    return res.redirect(`${FRONTEND_URL}?accessToken=${accessToken}`);
  } else {
    const newUser = await User.create({
      email,
      password: uuidv4(),
      verificationToken: uuidv4(),
      verify: true,
    });
    const payload = {
      id: newUser._id,
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "24h",
    });
    await User.findByIdAndUpdate(newUser._id, { accessToken });

    return res.redirect(`${FRONTEND_URL}?accessToken=${accessToken}`);
  }
};
module.exports = {
  googleAuth,
  googleRedirect,
};
