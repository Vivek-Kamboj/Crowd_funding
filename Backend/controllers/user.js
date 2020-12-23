const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/* bcrypt.genSalt(10, (err, salt) => {
  if (err)
    return res.status(400).json({ message: "Something went wrong, try again" });
  bcrypt.hash("abc", salt, (err, hash) => {
    if (err)
      return res
        .status(400)
        .json({ message: "Something went wrong, try again" });

    const user = new db.User({
      email: "imt_2018109@iiitm.ac.in",
      password: hash,
    });

    user.save();
  });
}); */

// Validating email address and domain
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
    if (
      email.indexOf("@iiitm.ac.in", email.length - "@iiitm.ac.in".length) !== -1
    ) {
      //VALID
      console.log("VALID");
      return true;
    }
  }
  return false;
}

const addAdmin = (req, res) => {
  const userData = req.body;
  console.log(userData);
  /* Validating Sign up Form */
  if (!userData.email || !userData.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check for existing user account
  db.User.findOne({ email: userData.email }, (err, foundUser) => {
    if (err) return res.status(400).json({ message: "Bad request, try again" });

    if (!validateEmail(userData.email))
      return res.status(400).json({
        message: "You can only add admins having email of iiitm.ac.in domain",
      });

    //return error if account already exist
    if (foundUser)
      return res.status(400).json({
        message: "Email is already been registered, please try again",
      });

    //if doesn't exist, we generate hash Salt ( make the password hard to crack)
    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res
          .status(400)
          .json({ message: "Something went wrong, try again" });
      bcrypt.hash(userData.password, salt, (err, hash) => {
        if (err)
          return res
            .status(400)
            .json({ message: "Something went wrong, try again" });

        const { email, password } = req.body;
        const newUser = {
          email: email,
          password: hash,
        };
        db.User.create(newUser, (err, createdUser) => {
          if (err)
            return res.status(400).json({
              message: "Bad Request, Please try again",
              err: err.errmsg,
            });
          jwt.sign(
            { foo: createdUser._id },
            `${"${process.env.JWT_SECRET}"}`,
            { expiresIn: "10h" },
            (err, jwt) => {
              if (err)
                return res.status(500).json({
                  status: 503,
                  errors: [{ message: "Access forbidden" }],
                });
              if (`${process.env.NODE_ENV}` == "prod") {
              } else {
                res.status(200).json({ jwt, userId: createdUser._id });
              }
            }
          );
        });
      });
    });
  });
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: 400,
      errors: [{ message: "Please enter both your email and password" }],
    });
  }

  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        errors: [{ message: "Something went wrong. Please try again" }],
      });

    if (!validateEmail(req.body.email))
      return res.status(400).json({
        message: "Please login with email of iiitm.ac.in domain",
      });

    if (!foundUser) {
      return res.status(400).json({
        status: 400,
        errors: [{ message: "Email or password is incorrect" }],
      });
    }

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err)
        return res.status(500).json({
          status: 500,
          errors: [{ message: "Something went wrong. Please try again" }],
        });
      if (isMatch) {
        /* jwt */
        jwt.sign(
          { foo: foundUser._id },
          `${process.env.JWT_SECRET}`,
          { expiresIn: "10h" },
          (err, jwt) => {
            if (err)
              return res.status(500).json({
                status: 503,
                errors: [{ message: "access forbidden" }],
              });
            res.status(200).json({ jwt, userId: foundUser._id });
          }
        );
      } else {
        return res.json({
          status: 400,
          errors: [{ message: "Email or password is invalid" }],
        });
      }
    });
  });
};

const create = async (req, res) => {
  // const user = req.curUserId;
  const campaign = { ...req.body, raised: 0 };
  console.log(campaign);

  if (!campaign.title || !campaign.description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (campaign.required <= 0) {
    return res.status(400).json({
      message: "The required amount cannot be equal to or smaller than 0",
    });
  }

  try {
    const newCampaign = await db.Campaign.create(campaign);

    console.log("newCampaign", newCampaign);
    res.status(200).json(newCampaign);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong when creating a new campaign",
      err: err,
    });
  }
};

const options = {
  // Return the document after updates are applied
  new: true,
  // Create a document if one isn't found. Required
  // for `setDefaultsOnInsert`
  upsert: true,
  setDefaultsOnInsert: true,
};

const update = async (req, res) => {
  try {
    let updatedCampaign = await db.Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    console.log(updatedCampaign);
    res.status(200).json(updatedCampaign);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while updating campaign",
      err: err,
    });
  }
};

module.exports = {
  addAdmin,
  login,
  create,
  update,
};
