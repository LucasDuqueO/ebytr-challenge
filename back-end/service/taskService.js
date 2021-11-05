const taskModel = require('../model/taskModel')

const create = async ({ name, description, state }) => {
  const newTask = await taskModel.create({ name, description, state })
  return newTask
}

const getAll = async () => {
  const taskList = await taskModel.getAll()
  return { data: taskList }
}

const getById = async (id) => {
  const returnedTask = await taskModel.getById(id)
  const message = 'Wrong id format'
  if (!returnedTask) return { message }
  return { data: returnedTask }
}

const update = async ({ id, name, description, state }) => {
  const updatedTask = await taskModel.update({ id, name, description, state })
  if (!updatedTask) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format'
      }
    }
  }
  return updatedTask
}

const remove = async (id) => {
  const taskToBeDeleted = await taskModel.getById(id)
  const message = 'Wrong id format'
  if (!taskToBeDeleted) {
    return { status: 422, message }
  }
  const deletedTask = await taskModel.remove(id)
  return { status: 200, data: deletedTask }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}
