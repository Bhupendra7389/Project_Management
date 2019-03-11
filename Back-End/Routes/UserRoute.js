var express = require("express");
var router = express.Router();
var User = require("../Models/Register");
const jwt = require("jsonwebtoken");
const secretKey = "AdminUser";

router.put("/Add/Notification", async (req, res) => {
  try {
    let user = await User.updateMany({
      $push: {
        Notifications: {
          Notification: req.body.Notification,
          Task_Name: req.body.Task_Name
        }
      }
    });

    await res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
router.post("/Remove/Notification", async (req, res) => {
  try {
    let user = await User.updateOne(
      { _id: req.body.UserId },
      {
        $pull: {
          Notifications: {
            _id: req.body.NotificationId
          }
        }
      }
    );

    await res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
router.get("/Get/Notifications/:UserId", async (req, res) => {
  try {
    let Noty = await User.findOne({ _id: req.params.UserId });
    res.json(Noty);
  } catch (error) {}
});
router.post("/Register/UserRegistration", async (req, res) => {
  try {
    const { Email, Password, Name, Position } = await req.body;

    const user = new User({
      Email,
      Password,
      Name,
      Position
    });
    user.save((error, user) => {
      if (error) {
        res.send(error);
      } else if (!user) {
        res.send("Data not found");
      } else {
        res.status(200).send(user);
      }
    });
  } catch (error) {
    console.error(500);
  }
});
router.get("/Get/ListDeveloper", async (req, res) => {
  try {
    const ListDeveloper = await User.find({ Position: "Developer" });

    res.json(ListDeveloper);
  } catch (error) {
    res.status(500);
  }
});
router.post("/Login/UserLogin", (req, res) => {
  try {
    const { Email, Password } = req.body;

    User.findOne({ Email }, (err, user) => {
      if (err) {
        res.status(500).json({ error: "Internal Error" });
      } else if (!user) {
        res.send("Wrong Email or Password");
      } else {
        user.isCorrectPassword(Password, (err, Data) => {
          if (err) {
            res.status(400).send("Internal Methos Error");
          } else if (!Data) {
            res.status(402).send("Password is Incorrect");
          } else {
            const payload = { Email };
            const token = jwt.sign(payload, secretKey, {
              expiresIn: "30 min"
            });
            const developer = {
              token: token,
              user: user
            };

            res.send(developer);
          }
        });
      }
    });
  } catch (error) {
    res.status(401);
    res.send("Error");
  }
});
module.exports = router;
