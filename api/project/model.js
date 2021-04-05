// build your `Project` model here
const db = require("../../data/dbConfig");

//get projects
async function getProjects() {
  const projects = await db("projects");
  return projects;
}

//get project by id
const getById = async (id) => {
  return await db.select(id).from("projects");
};

//insert new project
const newProject = async (newProj) => {
  return await db.insert(newProj).into("projects");
};

module.exports = {
  getProjects,
  getById,
  newProject,
};
