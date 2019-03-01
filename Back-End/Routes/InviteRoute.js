var express = require("express");
var router = express.Router();
var Invite = require("../Models/Invite/Invite");
require("mongoose");
router.post("/Invite/Developer", async (req, res) => {
  try {
    const { ProjectId, DeveloperId } = await req.body;
    const invite = new Invite({
      ProjectId,
      DeveloperId
    });
    invite.save();
  } catch {
    console.error(500);
  }
});
router.delete("/Delete/DeleteDeveloperInvite/:Data", async (req, res) => {
  try {
    // console.log(req.params.Data);
    // const { ProjectId, DeveloperId } = await req.body;
    let user = await Invite.findOneAndDelete({
      ProjectId: req.params.Data
    });
    res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
router.get("/Get/InvitedByProject/:DeveloperId", async (req, res) => {
  const project = await Invite.find({
    DeveloperId: req.params.DeveloperId
  });
  res.json(project);
});
module.exports = router;
