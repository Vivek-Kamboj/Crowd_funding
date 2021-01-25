const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const mw = require("../middleware");

router.post("/create", ctrl.query.create);
router.get("/all", mw.auth.verify, ctrl.query.showAll);
router.delete("/:id/delete", mw.auth.verify, ctrl.query.deleteQuery);

module.exports = router;
