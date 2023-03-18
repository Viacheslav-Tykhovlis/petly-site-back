const express = require("express");
const {
  current,
  signup,
  verifyEmail,
  resendEmail,
  refresh,
  login,
  logout,
} = require("../../controllers/users/usersControlers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/resend", resendEmail);
router.get("/logout", authMiddleware, logout);
router.get("/current", authMiddleware, current);
router.post("/refresh", refresh);

module.exports = router;
