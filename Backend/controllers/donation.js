const db = require("../models");

const details = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let donationDetails = await db.Donation.findById(req.params.id);

      if (donationDetails) {
        console.log("Thanks for payment!!");
        res.status(200).json(donationDetails);
      } else {
        // console.log("Invalid donation Id.");
        res.status(404).json({
          message: "Page Not Found.",
        });
      }
    } else {
      // console.log("Invalid donation Id.");
      res.status(404).json({
        message: "Page Not Found.",
      });
    }
  } catch (err) {
    console.log("Server error");
    return res.status(500).json({
      message: "Something went wrong when trying to get donation detail.",
    });
  }
};

module.exports = {
  details,
};
