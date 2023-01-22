require("dotenv").config();
const mongoose = require("mongoose");

const connection = process.env.UBCHIRPS_DB_URI;

console.log("Trying to connect to MongoDB Atlas (cloud)");
mongoose.set("strictQuery", false);
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
