const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

mongoose.set("strictQuery", false);

const { MONGODB_HOST_URI } = process.env;
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await mongoose.connect(MONGODB_HOST_URI);
    console.log("Database connection successful");
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Error ", err);
      }
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  }
}

main();
