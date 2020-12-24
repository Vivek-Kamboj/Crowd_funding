const mongoose = require("mongoose");
// require("dotenv").config();
// const dbUrl = process.env.MONGODB_URI;

mongoose
  .connect("mongodb://localhost:27017/crowdFundingDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(`MongoDB connection error : ${err}`));

module.exports = {
  Campaign: require("./Campaign"),
  User: require("./User"),
  Token: require("./Token"),
};
