const taskModel = require('../model/taskModel');

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

module.exports = {
  getAll,
  getById,
};
