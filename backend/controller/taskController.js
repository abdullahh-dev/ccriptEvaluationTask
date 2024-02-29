const Task = require('../Models/taskModel');

const createTask = async (req, res) => {
  const { taskName, createdAt, completed } = req.body;
  try {
    const tasks = new Task({
      taskName: taskName,
      completed: completed,
      createdAt: createdAt,
    });
    await tasks.save();
    res.status(201).json({ message: 'Task Added Successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to Add the Task' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, {
      completed: completed,
    });
    res.status(200).json({ message: 'Task Updated Successfully' });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createTask, getAllTasks, updateTask, deleteTask };
