const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("User", UserSchema);
