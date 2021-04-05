// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const projectRouter = express.Router();

//get projects
projectRouter.get("/", async (req, res) => {
  try {
    const data = await Project.getProjects();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

//post new porject
projectRouter.post("/", async (req, res, next) => {
  try {
    const newProj = await Project.getProjects(req.body);
    res.status(200).json(newProj);
  } catch (err) {
    next(err);
  }
});

projectRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong inside the projects router",
    errMessage: err.message,
  });
});

module.exports = projectRouter;
