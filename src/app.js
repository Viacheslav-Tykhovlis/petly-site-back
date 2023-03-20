const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const servicesRouter = require("./routes/basic/servicesRouter");
const authRouter = require("./routes/auth/authRouter");
const noticesRouter = require("./routes/notices/noticesRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/", servicesRouter);
app.use("/auth", authRouter);
app.use("/notices", noticesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
