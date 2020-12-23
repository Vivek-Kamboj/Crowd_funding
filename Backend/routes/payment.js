const express = require("express");
const checksum_lib = require("../paytm/checksum");
const https = require("https");
const qs = require("querystring");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const config = require("../config");
require("dotenv").config();

const app = express();
const router = express.Router();
const ctrl = require("../controllers");

router.post("/:id", [parseUrl, parseJson], (req, res) => {
  try {
    var paymentDetails = {
      amount: req.body.amount,
      customerId: req.body.name,
      customerEmail: req.body.email,
      customerPhone: req.body.phone,
    };
    if (
      !paymentDetails.amount ||
      !paymentDetails.customerId ||
      !paymentDetails.customerEmail ||
      !paymentDetails.customerPhone
    ) {
      res.status(400).send("Please fill all the fields!");
    } else {
      var params = {};
      params["MID"] = config.PaytmConfig.mid;
      params["WEBSITE"] = config.PaytmConfig.website;
      params["CHANNEL_ID"] = "WEB";
      params["INDUSTRY_TYPE_ID"] = "Retail";
      params["ORDER_ID"] = "TEST_1" + new Date().getTime();
      params["CUST_ID"] = paymentDetails.customerId + new Date().getTime();
      params["TXN_AMOUNT"] = paymentDetails.amount.toString();
      params["CALLBACK_URL"] =
        "http://process.env.PORT/api/donate/" + req.params.id + "/success";
      params["EMAIL"] = paymentDetails.customerEmail.toString();
      params["MOBILE_NO"] = paymentDetails.customerPhone.toString();

      checksum_lib.genchecksum(
        params,
        config.PaytmConfig.key,
        function (err, checksum) {
          var txn_url =
            "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
          // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

          var form_fields = "";
          for (var x in params) {
            form_fields +=
              "<input type='hidden' name='" +
              x +
              "' value='" +
              params[x] +
              "' >";
          }
          form_fields +=
            "<input type='hidden' name='CHECKSUMHASH' value='" +
            checksum +
            "' >";

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(
            '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
              txn_url +
              '" name="f1">' +
              form_fields +
              '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
          );
          res.end();
        }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong while making payment. Please try again.",
      err: err,
    });
  }
});

router.post("/:id/success", ctrl.payment.success);

module.exports = router;
