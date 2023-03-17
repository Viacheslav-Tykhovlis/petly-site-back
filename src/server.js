const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

mongoose.set("strictQuery", false);

// const { MONGODB_HOST_URI } = process.env;
// const { PORT } = process.env;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:vTAoAaxp0Obq9P8E@petly.hofegc9.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connection successful");
    app.listen(8080, (err) => {
      if (err) {
        console.log("Error ", err);
      }
      console.log(`Server is running. Use our API on port: 8080`);
    });
  } catch (error) {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  }
}

main();
