const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

mongoose.set("strictQuery", false);

const { MONGODB_HOST_URI } = process.env;
const { PORT } = process.env;

async function main() {
  try {
    await mongoose.connect(MONGODB_HOST_URI);

    app.listen(PORT, (err) => {
      if (err) console.error("Error at server launch:", err);
    });
  } catch (error) {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  }
}

main();
