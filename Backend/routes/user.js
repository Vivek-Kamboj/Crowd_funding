const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const mw = require("../middleware");

router.post("/addAdmin", mw.auth.verify, ctrl.user.addAdmin);

//router.get("/confirmation/:email/:token", ctrl.user.verify);
//router.post("/resend", ctrl.user.resend);
router.post("/login", ctrl.user.login);
//router.put("/forgotPassword", ctrl.user.forgotPassword);
//router.put("/resetPassword", ctrl.user.resetPassword);

router.post("/create", mw.auth.verify, ctrl.user.create);
router.put("/:id/update", mw.auth.verify, ctrl.user.update);
router.delete("/:id/delete", mw.auth.verify, ctrl.user.deleteCampaign);

module.exports = router;
