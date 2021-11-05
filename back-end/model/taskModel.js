const connection = require('./connection')
const { ObjectId } = require('mongodb')

const create = async ({ name, description, state }) => {
  const db = await connection()
  const newTask = await db.collection('tasks').insertOne({ name, description, state })
  return { _id: newTask.insertedId, name, description, state }
}

const getAll = async () => {
  const db = await connection()
  const taskList = await db.collection('tasks').find().toArray()
  return taskList
}

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null
  const db = await connection()
  const foundTask = await db.collection('tasks').findOne({ _id: ObjectId(id) })
  return foundTask
}

const update = async ({ id, name, description, state }) => {
  const db = await connection()
  if (!ObjectId.isValid(id)) return null
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { name, description, state } })
  const updatedTask = await db.collection('tasks').findOne({ _id: ObjectId(id) })
  return updatedTask
}

const remove = async (id) => {
  const db = await connection()
  if (!ObjectId.isValid(id)) return null
  const deletedTask = await getById(id)
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) })
  return deletedTask
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}
