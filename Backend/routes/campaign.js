const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/all", ctrl.campaign.showAll);
router.get("/:id", ctrl.campaign.show);

module.exports = router;
