require("mongoose");

const User = require("./Models/Register");
const Project = require("./Models/Projects/Project");
const Task = require("./Models/Projects/Task");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = new express();
const jwt = require("jsonwebtoken");
const Invite = require("./Models/Invite/Invite");

app.use(bodyParser.json()).use(morgan());
var cors = require("cors");
require("./Models/Mongo");
const secretKey = "AdminUser";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello Friends");
});
app.post("/Invite/Developer", async (req, res) => {
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

  res.send();
});
app.put("/Invite/InviteResponse/:ProjectId", async (req, res) => {
  try {
    await Project.findOneAndUpdate(
      { _id: req.params.ProjectId },
      { $push: { Workers: req.body.DeveloperEmail } }
    );
    res.send("Done");
  } catch {
    console.log("Error");
  }
});
app.put("/Add/Comment/:TaskId", async (req, res) => {
  try {
    await Task.findOneAndUpdate(
      { _id: req.params.TaskId },
      { $push: { Task_Comment: req.body.Comment } }
    );
    res.send("Done");
  } catch {
    console.log("Error");
  }
});
app.get("/Get/InvitedByProject/:DeveloperId", async (req, res) => {
  const project = await Invite.find({ DeveloperId: req.params.DeveloperId });
  res.json(project);
});
app.get("/Invite/InvitesById/:ProjectId", async (req, res) => {
  console.log(req.params.ProjectId);
  try {
    let project = await Project.find({ _id: req.params.ProjectId });
    console.log(project);
    res.json(project);
  } catch (error) {
    res.status(error);
  }
});

app.post("/Register/UserRegistration", async (req, res) => {
  console.log(req.body);
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
app.post("/Login/UserLogin", (req, res) => {
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
app.post("/Add/Task", async (req, res) => {
  try {
    const {
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    } = await req.body;
    const task = new Task({
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    });
    task.save((error, user) => {
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
app.post("/Add/Project", async (req, res) => {
  try {
    const {
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    } = await req.body;
    const project = new Project({
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    });
    project.save((error, user) => {
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
    const ProjectList = await Project.find({});

    res.json(ProjectList);
  } catch (error) {
    res.status(500);
  }
});
app.get("/Get/TaskList", async (req, res) => {
  try {
    const TaskList = await Task.find({});

    res.json(TaskList);
  } catch (error) {
    res.status(500);
  }
});
app.get("/Get/ListDeveloper", async (req, res) => {
  try {
    const ListDeveloper = await User.find({ Position: "Developer" });

    res.json(ListDeveloper);
  } catch (error) {
    res.status(500);
  }
});
app.get("/Edit/GetTaskById/:TaskId", async (req, res) => {
  try {
    const task = await Task.find({ _id: req.params.TaskId });

    res.json(task);
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
    await Task.findByIdAndUpdate(
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
    await Task.findByIdAndDelete({ _id: req.params.Id });
  } catch (error) {}
});

//Server Run
app.listen(8081, () => {
  console.log("Server is Running on Port http://localhost:8081");
});
