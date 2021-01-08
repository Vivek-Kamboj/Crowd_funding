const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/success/:id", ctrl.donation.details);

module.exports = router;
