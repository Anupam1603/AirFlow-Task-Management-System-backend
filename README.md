# AirFlow Task Management System

This is the **AirFlow Task Management System** where users can manage their tasks with various operations like adding, editing, deleting, sorting, and filtering tasks based on priority.

### Objective

The objective of this system is to allow users to perform CRUD operations (Create, Read, Update, Delete) on tasks. It includes endpoints to:
1. Add a new task
2. View all tasks
3. Sort tasks by priority
4. Edit task priority and text
5. Delete a task
6. Filter tasks by priority

---

### Data Structure

The task data is represented as an array of objects where each object contains the following properties:
```javascript
let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 }
];
