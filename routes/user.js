const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/register");

// New User Creation
router.post("/", (req, res) => {
  const { Username, Phone, Password } = req.body;
  if (!Username || !Phone || !Password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  User.findOne({ Username }).then(user => {
    if (user) return res.status(400).json({ message: "User Already Exists" });
    const newUser = new User({
      Username,
      Phone,
      Password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.Password, salt, (err, hash) => {
        if (err) throw err;
        newUser.Password = hash;
        newUser.save().then(user => {
          jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                Username: user.Username,
                Phone: user.Phone
              }
            });
          });
        });
      });
    });
  });
});
module.exports = router;
