const taskModel = require('../model/taskModel');

const create = async ({ name, description }) => {
  const newTask = await taskModel.create({ name, description });
  return newTask;
};

const getAll = async () => {
  const taskList = await taskModel.getAll();
  return { data: taskList };
};

const getById = async (id) => {
  const returnedTask = await taskModel.getById(id);
  const message = 'Wrong id format';
  if (!returnedTask) return { message };
  return { data: returnedTask };
};

const update = async ({ id, name, description }) => {
  const updatedTask = await taskModel.update({ id, name, description });
  if (!updatedTask) {
    return { err: {
      code: 'invalid_data',
      message: 'Wrong id format',
    } };
  }
  return updatedTask;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
