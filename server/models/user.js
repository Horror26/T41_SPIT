const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
