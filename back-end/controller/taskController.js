const taskService = require('../service/taskService');

const create = async (request, response) => {
  const { name, description } = request.body;
  const newTask = await taskService.create({ name, description });
  response.status(201).json(newTask);
};

const getAll = async (_request, response) => {
  const { data } = await taskService.getAll();
  response.status(200).json({ tasks: data });
};

const getById = async (request, response) => {
  const { id } = request.params;
  const { data, message } = await taskService.getById(id);
  if (message) return response.status(422).json({ err: { code: 'invalid_data', message } });
  response.status(200).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};
