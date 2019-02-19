require("mongoose");
const AddAdmin = require("./Models/Admin/AddAdmin");
const AddDeveloper = require("./Models/Developer/AddDeveloper");
const AddProject = require("./Models/TaskDetails/AddProject");
const AddTask = require("./Models/TaskDetails/AddTask");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = new express();
const jwt = require("jsonwebtoken");
app.use(bodyParser.json()).use(morgan());
var cors = require("cors");
require("./Models/Mongo");
const secretKey = "AdminUser";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello Friends");
});
app.post("/Register/AdminRegistration", async (req, res) => {
  try {
    const { Email, Password, Name, Position } = await req.body;
    const addAdmin = new AddAdmin({
      Email,
      Password,
      Name,
      Position
    });
    addAdmin.save((error, user) => {
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
app.post("/Login/AdminLogin", (req, res) => {
  try {
    const { Email, Password } = req.body;

    AddAdmin.findOne({ Email }, (err, user) => {
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
            console.log("LoggedIn");
            res.send({ token: token });
          }
        });
      }
    });
  } catch (error) {
    res.status(401);
    res.send("Error");
  }
});
app.post("/Register/DeveloperRegistration", async (req, res) => {
  try {
    const { Email, Password, Name, Position } = await req.body;
    const addDeveloper = new AddDeveloper({
      Email,
      Password,
      Name,
      Position
    });
    addDeveloper.save((error, user) => {
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
app.post("/Login/DeveloperLogin", (req, res) => {
  try {
    const { Email, Password } = req.body;

    AddDeveloper.findOne({ Email }, (err, user) => {
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
            res.send({ token: token });
          }
        });
      }
    });
  } catch (error) {
    res.status(401);
    res.send("Error");
  }
});
app.post("/Add/AddTask", async (req, res) => {
  try {
    const {
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    } = await req.body;
    const addProject = new AddTask({
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    });
    addProject.save((error, user) => {
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
app.post("/Add/AddProject", async (req, res) => {
  try {
    const {
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    } = await req.body;
    const addProject = new AddProject({
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    });
    addProject.save((error, user) => {
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

//Server Run
app.listen(8081, () => {
  console.log("Server is Running on Port http://localhost:8081");
});
