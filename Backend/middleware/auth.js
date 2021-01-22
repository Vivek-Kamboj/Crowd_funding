const jwt = require("jsonwebtoken");
require("dotenv").config();

const verify = (req, res, next) => {
  try {
    // console.log("req.headers", req.headers);
    const header = req.headers.authorization;
    // console.log("header in auth verify", req.headers.authorization);
    if (typeof header !== "undefined") {
      const bearer = header.split(" ");
      const token = bearer[1];
      jwt.verify(token, `${process.env.JWT_SECRET}`, function (err, decoded) {
        if (err)
          return res.status(401).json({ message: "You are not authorized" });
        req.curUserId = decoded.foo;
        next();
      });
    } else {
      res.status(403).json({
        message: "You are not authorized",
      });
    }
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  verify,
};
