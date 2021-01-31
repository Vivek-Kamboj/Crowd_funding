const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be blank"],
  },
  subTitle: {
    type: String,
    required: [true, "Title cannot be blank"],
  },
  description: {
    type: String,
    required: [true, "Please give a description"],
  },
  imageUrl: {
    type: String,
  },
  required: {
    type: Number,
    required: [true, "Amount required must be added"],
  },
  raised: {
    type: Number,
    default: 0,
  },
  start: {
    type: Date,
    default: Date.now,
  },
  donorsNum: {
    type: Number,
    default: 0,
  },
  donors: [
    {
      transactionID: {
        type: String,
        required: [true],
        default: "",
      },
      donationAmount: {
        type: Number,
        default: 0,
      },
    },
  ],
  isHidden: {
    type: Boolean,
    default: false,
  },
  isActivated: {
    type: Boolean,
    default: true,
  },
});

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
