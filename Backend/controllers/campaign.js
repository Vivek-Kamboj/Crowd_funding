const db = require("../models");

const show = async (req, res) => {
  try {
    let showProject = await db.Project.findById(req.params.id);
    console.log(showProject);
    res.status(200).json(showProject);
  } catch (err) {
    return res.status(500).json({
      message: "Something wrong when getting the project",
      err: err,
    });
  }
};

const showAll = async (req, res) => {
  console.log("success");
  try {
    const allProject = await db.Project.find({});
    res.status(200).json(allProject);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong when trying to get all projects",
    });
  }
};

module.exports = {
  show,
  showAll,
};
