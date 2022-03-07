const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
