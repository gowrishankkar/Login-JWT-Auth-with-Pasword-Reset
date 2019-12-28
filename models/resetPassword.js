const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resetPasswordSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  newPassword: {
    type: String,
    required: true
  },
  Password: {
    type: String
  }
});

module.exports = resetPassword = mongoose.model(
  "resetPassword",
  resetPasswordSchema
);
