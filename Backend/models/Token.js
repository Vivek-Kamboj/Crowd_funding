const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TokenSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    index: { expires: 86400 },
  },
});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
