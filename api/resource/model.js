// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getResource() {
  return await db("resources");
}

const insertResource = async (data) => {
  return await db.insert(data).into("resources");
};

module.exports = { getResource, insertResource };
