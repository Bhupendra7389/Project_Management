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
router.get("/Get/Notifications", async (req, res) => {
  try {
    let Noty = await Notifications.find({});
    res.json(Noty);
  } catch (error) {}
});
router.delete("/Delete/Notification/:NotyId", async (req, res) => {
  try {
    let Noty = await Notifications.findByIdAndDelete({
      _id: req.params.NotyId
    });

    res.json(Noty);
  } catch (error) {}
});
module.exports = router;
