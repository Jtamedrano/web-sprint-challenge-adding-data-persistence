// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const taskRouter = express.Router();

//get request from task
taskRouter.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getTask();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

//post task

taskRouter.post("/", async (req, res, next) => {
  await Task.insertTask(req.body)
    .then((newTask) => {
      res.status(200).json(newTask);
    })
    .catch(next());
});

taskRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong inside the resource router",
    errMessage: err.message,
  });
});

module.exports = taskRouter;
