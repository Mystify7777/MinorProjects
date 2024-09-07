const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    updateTaskList();
    taskInput.value = '';
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
            ${task.text}
            <div>
                <button onclick="toggleComplete(${task.id})">✔</button>
                <button onclick="deleteTask(${task.id})">✖</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

updateTaskList();
