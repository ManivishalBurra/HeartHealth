const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  id: String,
  email: String,
  profilepic: String,
});

module.exports = mongoose.model("User", userSchema, "User");
