const sendGrid = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const { SENDGRID_API_KEY } = process.env;

function createEmail(email, verificationToken) {
  const confirmLink = `www........................./auth/users/verify/${verificationToken}`;
  const sendEmail = {
    from: "",
    to: email,
    subject: "Please confirm your email",
    html: `<a href="http://${confirmLink}">Confirm your email</a>
          <p>go to link ${confirmLink}</p>`,
    text: `go to link ${confirmLink}`,
  };
  return sendEmail;
}

async function sendEmail(email, verificationToken) {
  sendGrid.setApiKey(SENDGRID_API_KEY);
  await sendGrid.send(createEmail(email, verificationToken));
}

module.exports = sendEmail;
