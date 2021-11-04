const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const taskList = await db.collection('tasks').find().toArray();
  return taskList;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const foundTask = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return foundTask;
};

module.exports = {
  getAll,
  getById,
};
