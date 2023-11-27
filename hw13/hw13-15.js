/**
 * Create an array of values given from user via prompt, create a list element and set each array value as a list item
 */

function renderListItem(task){
    const listElement = document.getElementById('list');
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `<span>${task}</span>`;
    listElement.append(taskElement);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    taskElement.append(deleteButton);

    deleteButton.addEventListener('click', event => {
        const listItemToDelete = event.target.previousElementSibling.innerHTML;
        const tasks = localStorage.getItem('tasks').split(',');
        const taskFiltered = tasks.filter(task => task !== listItemToDelete);
        localStorage.setItem('tasks', taskFiltered);
        event.target.closest('li').remove();
    });
}

function init(){
    const appElement = document.getElementById('to-do-list-app');
    let tasks = [];

    const listElement = document.createElement('ul');
    listElement.id = 'list';
    appElement.append(listElement); 

    if(localStorage.getItem('tasks')){
        tasks = localStorage.getItem('tasks').split(',');
    } else{
        while (true){
            const task = prompt('What are you going to do today?', ' ');
            if (task === null) break;
            tasks.push(task);
        }
        localStorage.setItem('tasks', tasks);
    }
    
    tasks.forEach(task => renderListItem(task));
    
    const addButton = document.createElement('button');
    addButton.innerHTML = '+';
    appElement.append(addButton);

    addButton.addEventListener('click', () => {
        const task = prompt('What are you going to do today?', ' ');
        const tasks = localStorage.getItem('tasks').split(',');
        tasks.push(task);
        localStorage.setItem('tasks', tasks);
        renderListItem(task);
    });
}


init();

