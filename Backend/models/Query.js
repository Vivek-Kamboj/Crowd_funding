const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuerySchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

const Query = mongoose.model("Query", QuerySchema);

module.exports = Query;
