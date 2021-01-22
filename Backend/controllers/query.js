const db = require("../models");

const create = async (req, res) => {
  const query = { ...req.body };

  if (!query.email) {
    return res
      .status(400)
      .json({ message: "Please enter an email that we can respond to." });
  }

  if (!query.message) {
    return res.status(400).json({ message: "Please enter your message." });
  }

  try {
    const newQuery = await db.Query.create(query);

    res.status(200).json(newQuery);
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message:
        "Something went wrong while sending the query. Please try again!",
    });
  }
};

const showAll = async (req, res) => {
  try {
    const allQuery = await db.Query.find({});
    res.status(200).json(allQuery);
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message: "Something went wrong when trying to get all the queries",
    });
  }
};

const deleteQuery = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      db.Query.findByIdAndRemove(req.params.id, (err, success) => {
        if (err) {
          console.log("Server error.");
          return res.status(500).json({
            message:
              "Something went wrong while deleting this query. Try again.",
          });
        }

        return res.status(200).json({
          message: "Successfully deleted the query.",
        });
      });
    } else {
      res.status(404).json({
        message: "No query exists.",
      });
    }
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message: "Something went wrong while deleting this query. Try again.",
    });
  }
};

module.exports = {
  create,
  showAll,
  deleteQuery,
};
