const taskInput = document.getElementById('new-task-input');
const descriptionInput = document.getElementById('description-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const deleteCompletedBtn = document.getElementById('delete-completed-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const descriptionContent = document.getElementById('description-content');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let selectedTaskId = null;

const addTask = () => {
    const taskText = taskInput.value.trim();
    const descriptionText = descriptionInput.value.trim();
    if (!taskText) return;

    const task = {
        id: Date.now(),
        text: taskText,
        description: descriptionText || 'No description',
        completed: false
    };

    tasks.push(task);
    updateTaskList();
    taskInput.value = '';
    descriptionInput.value = '';
};

const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
};

const toggleComplete = (id) => {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    updateTaskList();
};

const updateTaskList = () => {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.toggle('completed', task.completed);

        taskItem.innerHTML = `
            <span class="task-name">${task.text}</span>
            <div class="task-actions">
                <button class="mark-btn" onclick="toggleComplete(${task.id})">✔</button>
                <button class="edit-btn" onclick="editTask(${task.id})">✎</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">✖</button>
            </div>
        `;

        taskItem.addEventListener('click', () => showDescription(task.id));

        taskList.appendChild(taskItem);
    });

    if (!tasks.length) {
        descriptionContent.innerText = "Select a task to know more about it.";
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const showDescription = (id) => {
    const task = tasks.find(task => task.id === id);
    descriptionContent.innerText = task ? task.description : "Select a task to know more about it.";
    selectedTaskId = id;
};

const hideDescription = () => {
    descriptionContent.innerText = "Select a task to know more about it.";
};

const deleteCompletedTasks = () => {
    tasks = tasks.filter(task => !task.completed);
    updateTaskList();
};

const deleteAllTasks = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        updateTaskList();
    }
};

const editTask = (id) => {
    const task = tasks.find(task => task.id === id);
    const newTaskText = prompt("Edit task:", task.text);
    const newDescriptionText = prompt("Edit description:", task.description);

    if (newTaskText !== null) task.text = newTaskText.trim();
    if (newDescriptionText !== null) task.description = newDescriptionText.trim();

    updateTaskList();
};

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);
deleteAllBtn.addEventListener('click', deleteAllTasks);

updateTaskList();
