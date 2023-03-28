const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png", "webp"],
  transformation: [{ width: 600, crop: "scale" }, { fetch_format: "auto" }],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  switch (file.mimetype) {
    case "image/jpeg":
      return cb(null, true);
    case "image/png":
      return cb(null, true);
    case "image/webp":
      return cb(null, true);
    case "image/apng":
      return cb(null, true);
    case "image/avif":
      return cb(null, true);
    default:
      cb(null, false);
      break;
  }
};

const uploadCloud = multer({ storage, fileFilter });

module.exports = { uploadCloud };
