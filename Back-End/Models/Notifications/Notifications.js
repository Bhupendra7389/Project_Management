const mongoose = require("mongoose");
const Notifications = new mongoose.Schema({
  Notifications: { type: String, require: true },
  Task_Name: { type: String, require: true }
});

module.exports = mongoose.model("Notifications", Notifications);
