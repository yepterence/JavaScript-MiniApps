// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput =  document.querySelector('#task');

// Load all event listeners 
loadEventListeners();

function loadEventListeners(){
    // DOM load event 
    document.addEventListener('DOMContentLoaded',getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', deleteTask);
    // Clear all tasks
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Get stored tasks
function getTasks(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        // instantiate tasks array if key 'tasks' doesn't exist
        tasks = [];
    } else {
        // retrieves value for key tasks from localStorage and parse JSON string into JS expression 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // loop through tasks and add task to Tasks List
    tasks.forEach(task => addTasktoDOM(task));
}

// Appends new input task to DOM
function addTasktoDOM(task) {
    
    // Create an list item element
    
    const li = document.createElement('li');
    
    // Add class
    li.className = 'collection-item';
    
    // Create text node and append to li
    
    li.appendChild(document.createTextNode(task));
    
    // Create new link element
    
    const link = document.createElement('a');
    // Add link class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    
    // Append li to ul
    taskList.appendChild(li);
}


// Event Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }
    // Create an list item element
    
    const li = document.createElement('li');
    
    // Add class
    li.className = 'collection-item';
    
    // Create text node and append to li
    // taskValue input is from the form
    li.appendChild(document.createTextNode(taskInput.value));
    
    // Create new link element
    
    const link = document.createElement('a');
    // Add link class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    
    // Append li to ul
    taskList.appendChild(li);
    
    // Store task into LocalStorage
    saveToLocal(taskInput.value);

    // Clear Inputs
    taskInput.value='';

    e.preventDefault();
}

// Store task in localStorage
function saveToLocal(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        // instantiate tasks array if key 'tasks' doesn't exist
        tasks = [];
    } else {
        // retrieves value for key tasks from localStorage and parse JSON string into JS expression 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    // pushes an array with task string as value to key 'tasks'
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete Task
function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        // remove from DOM
        let target_item = e.target.parentElement.parentElement;
        target_item.remove();

        // remove from local storage
        removeTaskFromLocalStorage(target_item);
    }
    
}

// Remove all tasks
function clearTasks() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Slower alt
    // taskList.innerHTML = '';
    purgeLocalStorage();
}

function purgeLocalStorage() {
    localStorage.clear();
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks; 
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // Loop through taskItem list and splice away task
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });
    // Assign new tasks list to LS
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filter Tasks
function filterTasks(e){
    const textInput = e.target.value.toLowerCase();
    // get element by classes
    document.querySelectorAll('.collection-item').forEach(
        function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(textInput) != -1){
            task.style.display = 'block';
            
        } else {
            task.style.display = 'none';
        }
    });
}
