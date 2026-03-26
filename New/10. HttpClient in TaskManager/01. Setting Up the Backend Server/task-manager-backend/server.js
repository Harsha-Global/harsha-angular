const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read tasks from file
const readTasks = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write tasks to file
const writeTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), 'utf8');
};

// Helper function to generate new ID
const generateId = (tasks) => {
  if (tasks.length === 0) return 1;
  const maxId = Math.max(...tasks.map(task => task.id));
  return maxId + 1;
};

// GET /tasks - Fetch all tasks
app.get('/tasks', (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// GET /tasks/:id - Fetch single task
app.get('/tasks/:id', (req, res) => {
  try {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// POST /tasks - Create new task
app.post('/tasks', (req, res) => {
  try {
    const tasks = readTasks();
    const { title, description, category, priority, dueDate, status } = req.body;
    
    // Validation
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!category || !category.trim()) {
      return res.status(400).json({ error: 'Category is required' });
    }
    if (!dueDate) {
      return res.status(400).json({ error: 'Due date is required' });
    }
    
    const newTask = {
      id: generateId(tasks),
      title: title.trim(),
      description: description ? description.trim() : '',
      category: category.trim(),
      priority: priority || 'medium',
      dueDate: dueDate,
      status: status || 'pending',
      createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    writeTasks(tasks);
    
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// PUT /tasks/:id - Update task
app.put('/tasks/:id', (req, res) => {
  try {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const { title, description, category, priority, dueDate, status, completedAt } = req.body;
    
    // Update only provided fields
    if (title !== undefined) tasks[taskIndex].title = title.trim();
    if (description !== undefined) tasks[taskIndex].description = description.trim();
    if (category !== undefined) tasks[taskIndex].category = category.trim();
    if (priority !== undefined) tasks[taskIndex].priority = priority;
    if (dueDate !== undefined) tasks[taskIndex].dueDate = dueDate;
    if (status !== undefined) tasks[taskIndex].status = status;
    if (completedAt !== undefined) tasks[taskIndex].completedAt = completedAt;
    
    writeTasks(tasks);
    
    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /tasks/:id - Delete task
app.delete('/tasks/:id', (req, res) => {
  try {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
