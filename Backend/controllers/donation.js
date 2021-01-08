const db = require("../models");

const details = async (req, res) => {
  try {
    console.log("Thanks for payment!!");

    let donationDetails = await db.Donation.findById(req.params.id);

    if (donationDetails) {
      res.status(200).json(donationDetails);
    } else {
      res.status(404).json({
        message: "Page Not Found.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong when trying to get donation detail.",
    });
  }
};

module.exports = {
  details,
};
