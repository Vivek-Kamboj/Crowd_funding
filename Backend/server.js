const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// -----ENV Setup----- //
require("dotenv").config();
const PORT = 3000;
const routes = require("./routes");

// -----Middleware----- //
app.use(cors());
app.use(bodyParser.json());

// -----Routes----- //
app.get("/", (req, res) => {
  res.send("Okay");
});

// app.use("/api/admin", routes.admin);
app.use("/campaign", routes.campaign);
app.use("/auth", routes.auth);
// app.use("/api/payment", routes.payment);

app.listen(PORT, function () {
  console.log("Server running successfully");
});
