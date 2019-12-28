const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/register");

// Login Authentication
router.post("/", (req, res) => {
  const { Username, Password } = req.body;

  if (!Username || !Password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  User.findOne({ Username }).then(user => {
    if (!user) return res.status(400).json({ message: "User Does Not Exists" });

    // Password Validation
    bcrypt.compare(Password, user.Password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ message: " Credentials Invalid" });

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

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});
module.exports = router;
