const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  displayName: String,
  picture: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema, "users");
