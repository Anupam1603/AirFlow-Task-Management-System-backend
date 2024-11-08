let cors = require('cors');
let express = require('express');
let app = express();
let tasks = require('./tasks');

app.use(cors());

//E1
function addTask(tasks, taskId, text, priority) {
 tasks.push({taskId, text, priority})
  return tasks;
}
app.get('/tasks/add', (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let priority = parseInt(req.query.priority);

  let result = addTask(tasks, taskId, text, priority);
  res.json({ tasks: result });
});

//E2
function getAllTasks(tasks) 
{
  return tasks;
}

app.get('/tasks', (req,res)=> {
   let result = getAllTasks(tasks);
  res.json({tasks:result})
})

//E3
function sortByPriority(tasks) {
 
  return tasks.sort((t1,t2) => t1.priority - t2.priority);
}
app.get('/tasks/sort-by-priority', (req,res) => {

  let result = sortByPriority(tasks) 
  res.json({tasks:result})
})

//E4
function updatePriorityByTaskId(tasks,taskId,priority) {

  for(let i = 0; i < tasks.length;i++ ) {
    if(tasks[i].taskId === taskId) {
      tasks[i].priority = priority;
    }
    return tasks
  }
}
app.get('/tasks/edit-priority', (req,res)=> {
  
  let taskId =parseInt(req.query.taskId) ;
  let priority =parseInt(req.query.priority) ;


  let result = updatePriorityByTaskId(tasks,taskId,priority);
  res.json({tasks:result})
})

//E5
function editTextByTaskId(tasks,taskId,text) {
  for(let i =0 ; i<tasks.length;i++ ) {
     if(tasks[i].taskId === taskId) {
      tasks[i].text = text;
     }
  }
  return tasks;
}

app.get('/tasks/edit-text', (req,res)=> {
  
  let taskId =parseInt(req.query.taskId) ;
  let text = req.query.text;
  let result =editTextByTaskId(tasks,taskId,text);

  res.json({tasks:result})
})

//E6
function removeTaskById(tasks, taskId) {
  return tasks.filter(task => task.taskId !== taskId); 
}

app.get('/tasks/delete', (req, res) => {
  let taskId = parseInt(req.query.taskId); 
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid taskId parameter' });
  }

 
  let result = removeTaskById(tasks, taskId);

 
  res.json({ tasks: result });
});

//E7
function filterTasksByPriority(tasks,priority) {
  return tasks.filter(task => task.priority === priority);
}
app.get('/tasks/filter-by-priority', (req,res)=> {
  
  let priority = parseInt(req.query.priority) ;

  let result = filterTasksByPriority(tasks,priority);
  res.json({tasks:result})
})

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server hitting on PORT: ${PORT}`);
});
