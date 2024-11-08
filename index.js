let cors = require('cors');
let express = require('express');
let app = express();
let tasks = require('./tasks');

app.use(cors());

//E1
function addTask(tasks, taskId, text, priority) {
  tasks.taskId = taskId;
  tasks.text = text;
  tasks.priority = priority;
  return tasks;
}
app.get('/tasks/add', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let priority = parseInt(req.query.priority);

  let result = addTask(tasks, taskId, text, priority);
  res.json({ tasks: result });
});
let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server hitting on PORT: ${PORT}`);
});
