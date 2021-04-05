// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const resourceRouter = express.Router();

//get request from resource
resourceRouter.get("/", async (req, res, next) => {
  try {
    const data = await Resource.getResource();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

//post resource

resourceRouter.post("/", async (req, res, next) => {
  try {
    const newSource = await Resource.insertResource(req.body);
    res.status(200).json(newSource);
  } catch (err) {
    next(err);
  }
});

resourceRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong inside the resource router",
    errMessage: err.message,
  });
});

module.exports = resourceRouter;
