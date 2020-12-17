const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addAdmin = (req, res) => {
  const userData = req.body;
  console.log(userData);
  /* Validating Sign up Form */
  if (!userData.username || !userData.email || !userData.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check for existing user account
  db.User.findOne({ email: userData.email }, (err, foundUser) => {
    if (err) return res.status(400).json({ message: "Bad request, try again" });

    //return error if account alraedy exist
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

        const { username, email, password } = req.body;
        const newUser = {
          username: username,
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
          errors: [{ message: "Email or password is incorrect" }],
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
    // const foundUser = await db.User.findById(user);
    const newCampaign = await db.Campaign.create(campaign);

    // foundUser.ownPj.push(newProject);
    // const savedUser = await foundUser.save();
    console.log("newCampaign", newCampaign);
    res.status(200).json(newCampaign);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong when creating a new campaign",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    let updatedCampaign = await db.Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
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
