// build your `Task` model here
const db = require("../../data/dbConfig");

const getTask = async () => {
  return await db("tasks");
};

const insertTask = async (data) => {
  const newTask = await db.insert(data).into("tasks");
  return newTask;
};

module.exports = { getTask, insertTask };
