// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");

// const User = require("../models/register");

// router.post("/", (req, res) => {
//   let { Username, Phone, newPassword } = req.body;

//   if (!Username || !Phone || !newPassword) {
//     return res.status(400).json({ message: "Please enter all fields" });
//   }

//   User.findOne({ Username }).then(user => {
//     if (!user) return res.status(400).json({ message: "User Does Not Exists" });

//     User.deleteOne({ Username: user.Username }).then(del => {
      

//       let Password = newPassword;
//       const newUser = new User({
//         Username,
//         Phone,
//         Password
//       });

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.Password, salt, (err, hash) => {
//           // if (err) throw err;
//           newUser.Password = hash;
//           newUser.save().then(user => {
//             jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
//               if (err) throw err;
//               res.json({
//                 token,
//                 user: {
//                   id: user.id,
//                   Username: user.Username,
//                   Phone: user.Phone,
//                   Password: user.Password
//                 }
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// router.get("/user", auth, (req, res) => {
//   User.findById(req.user.id)
//     .select("-password")
//     .then(user => res.json(user));
// });
// module.exports = router;
