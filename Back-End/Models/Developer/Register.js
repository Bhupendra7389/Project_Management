const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const AddDeveloper = new mongoose.Schema({
  Email: { type: String, require: true, unique: true },
  Password: { type: String, require: true },
  Name: { type: String, required: true },
  Position: { type: String, required: true }
});
AddDeveloper.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(this.Password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.Password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});
AddDeveloper.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.Password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};
module.exports = mongoose.model("AddDeveloper", AddDeveloper);
