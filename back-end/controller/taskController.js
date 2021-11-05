const taskService = require('../service/taskService')

const create = async (request, response) => {
  const { name, description, state } = request.body
  const newTask = await taskService.create({ name, description, state })
  response.status(201).json(newTask)
}

const getAll = async (_request, response) => {
  const { data } = await taskService.getAll()
  response.status(200).json({ tasks: data })
}

const getById = async (request, response) => {
  const { id } = request.params
  const { data, message } = await taskService.getById(id)
  if (message) return response.status(422).json({ err: { code: 'invalid_data', message } })
  response.status(200).json(data)
}

const update = async (request, response) => {
  const { id } = request.params
  const { name, description, state } = request.body
  const updatedTask = await taskService.update({ id, name, description, state })
  if (updatedTask.err) {
    return response.status(422).json(updatedTask)
  }
  response.status(200).json(updatedTask)
}

const remove = async (request, response) => {
  const { id } = request.params
  const { status, data, message } = await taskService.remove(id)
  if (message) {
    return response.status(status)
      .json({ err: { code: 'invalid_data', message } })
  }
  response.status(status).json(data)
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}
