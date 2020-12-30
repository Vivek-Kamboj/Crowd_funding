const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  /*
  isVerified: {
    type: Boolean,
    default: false,
  },*/
  resetLink: {
    data: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
