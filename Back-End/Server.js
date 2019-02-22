require("mongoose");

const AddDeveloper = require("./Models/Developer/Register");
const AddProject = require("./Models/TaskDetails/Project");
const AddTask = require("./Models/TaskDetails/Task");
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

app.post("/Register/DeveloperRegistration", async (req, res) => {
  console.log(req.body);
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
app.get("/Get/ProjectList", async (req, res) => {
  try {
    const ProjectList = await AddProject.find({});

    res.json(ProjectList);
  } catch (error) {
    res.status(500);
  }
});
app.get("/Get/TaskList", async (req, res) => {
  try {
    const TaskList = await AddTask.find({});

    res.json(TaskList);
  } catch (error) {
    res.status(500);
  }
});
app.get("/Get/ListDeveloper", async (req, res) => {
  try {
    const ListDeveloper = await AddDeveloper.find({ Position: "Developer" });

    res.json(ListDeveloper);
  } catch (error) {
    res.status(500);
  }
});
app.patch("/Edit/EditTask/:TaskId", async (req, res) => {
  try {
    const {
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    } = await req.body;
    await AddTask.findByIdAndUpdate(
      {
        _id: req.params.TaskId
      },
      {
        Task_Name,
        Start_Date,
        Submission_Date,
        Total_Developers,
        Task_Discription
      }
    );

    res.json("Done");
  } catch (error) {
    res.status(500);
  }
});
app.delete("/Delete/DeleteTask/:Id", async (req, res) => {
  try {
    await AddTask.findByIdAndDelete({ _id: req.params.Id });
  } catch (error) {}
});

//Server Run
app.listen(8081, () => {
  console.log("Server is Running on Port http://localhost:8081");
});
