let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        })
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    })
}

function addtask() {
    let newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

addTaskBtn.addEventListener('click', addtask);
renderTasks();