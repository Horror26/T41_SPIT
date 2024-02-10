const mongoose = require("mongoose");
const db =
  "mongodb+srv://horror12:wk8g1ar2XHUS8VJQ@cluster0.gspfp6x.mongodb.net/spit";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
