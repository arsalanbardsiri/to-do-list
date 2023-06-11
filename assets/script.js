// Task class
class Task {
    constructor(id, title, status) {
      this.id = id;
      this.title = title;
      this.status = status;
    }
  }
  
  // Initialize an empty array to store tasks
  let tasks = [];
  
  // Function to add a task
  function addTask(title) {
    // Create a new task object
    const task = new Task(generateId(), title, 'incomplete');
    
    // Add the task to the tasks array
    tasks.push(task);
    
    // Update the UI
    renderTasks();
  }
  
  // Function to generate a unique ID
  function generateId() {
    // Generate a unique ID using a library or a custom algorithm
    // Example: return new Date().getTime();
  }
  
  // Function to render tasks
  function renderTasks() {
    const taskList = document.getElementById('task-list');
    
    // Clear the existing task list
    taskList.innerHTML = '';
    
    // Loop through the tasks array
    tasks.forEach(task => {
      // Create HTML elements for each task and append them to the task list
      const li = document.createElement('li');
      li.textContent = task.title;
      taskList.appendChild(li);
    });
  }
  
  // Event listener for form submission
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const title = taskInput.value;
    
    // Add the task
    addTask(title);
    
    // Clear the task input field
    taskInput.value = '';
  });
  