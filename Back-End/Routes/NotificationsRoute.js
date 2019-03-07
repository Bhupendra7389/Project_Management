var express = require("express");
var router = express.Router();
var Notifications = require("../Models/Notifications/Notifications");
router.post("/Add/Notification", async (req, res) => {
  try {
    let user = await new Notifications({
      Notifications: req.body.Noty,
      Task_Name: req.body.Task_Name
    });
    await user.save();
    await res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
router.get("/GET/NOTIFICATIONS", (req, res) => {
  try {
    let Noty = Notifications.find({});
    res.json(Noty);
  } catch (error) {}
});
module.exports = router;
