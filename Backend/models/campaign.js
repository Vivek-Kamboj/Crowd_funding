const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  required: {
    type: Number,
  },
  raised: {
    type: Number,
    default: 0,
  },
});

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
