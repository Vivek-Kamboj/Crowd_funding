const db = require("../models");

// The below code is only for development stage
// To add some default items in our DB (Campaign collection) and check the api
const item1 = new db.Campaign({
  title: "test1",
  description: "test1d",
  imageUrl:
    "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPxYPE8M_tAhVYeH0KHVWFD00Q_AUoAXoECCMQAw&biw=1366&bih=657#imgrc=PDxUM2uh-Nz6cM",
  required: 500,
  start: "2020-12-22T11:18:54.919Z",
});

const item2 = new db.Campaign({
  title: "test2",
  description: "test2d",
  imageUrl:
    "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPxYPE8M_tAhVYeH0KHVWFD00Q_AUoAXoECCMQAw&biw=1366&bih=657#imgrc=PDxUM2uh-Nz6cM",
  required: 100,
  start: "2020-12-20T11:18:54.919Z",
});

const item3 = new db.Campaign({
  title: "test3",
  description: "test3d",
  imageUrl:
    "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPxYPE8M_tAhVYeH0KHVWFD00Q_AUoAXoECCMQAw&biw=1366&bih=657#imgrc=PDxUM2uh-Nz6cM",
  required: 5000,
  start: "2020-12-19T11:18:54.919Z",
});

const item4 = new db.Campaign({
  title: "test4",
  description: "test4d",
  imageUrl:
    "https://www.google.com/search?q=images&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPxYPE8M_tAhVYeH0KHVWFD00Q_AUoAXoECCMQAw&biw=1366&bih=657#imgrc=PDxUM2uh-Nz6cM",
  required: 50000,
  start: "2020-12-22T11:19:54.919Z",
});

const defaultItems = [item1, item2, item3, item4];

db.Campaign.find().exec(function (err, results) {
  var count = results.length;

  if (count == 0) {
    db.Campaign.insertMany(defaultItems, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Successfully added default items to Campaign collection in DB"
        );
      }
    });
  }
});
// Till here ----------------------------------------------------------------------------------

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
    // Add this code in CreateCampaign Route during production
    // To sort campaign in descending order of dates
    await db.Campaign.find({})
      .sort({ start: -1 })
      .exec(function (err, allCampaign) {
        if (err) console.log(err);
        else {
          console.log("Sorted");
          res.status(200).json(allCampaign);
        }
      });
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
