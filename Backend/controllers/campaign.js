const db = require("../models");

/* const item = new db.Campaign({
  title: "xyz",
  description: "again",
  imageUrl:
    "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPxYPE8M_tAhVYeH0KHVWFD00Q_AUoAXoECCMQAw&biw=1366&bih=657#imgrc=PDxUM2uh-Nz6cM",
  required: 500,
  raised: 50,
});

item.save(); */

const show = async (req, res) => {
  try {
    let showCampaign = await db.Campaign.findById(req.params.id);
    console.log(showCampaign);
    res.status(200).json(showCampaign);
  } catch (err) {
    return res.status(500).json({
      message: "Something wrong when getting the campaign",
      err: err,
    });
  }
};

const showAll = async (req, res) => {
  console.log("success");
  try {
    const allCampaign = await db.Campaign.find({});
    res.status(200).json(allCampaign);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong when trying to get all campaign",
    });
  }
};

module.exports = {
  show,
  showAll,
};
