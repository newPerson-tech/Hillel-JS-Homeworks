/**
 * створіть масив рядків (наприклад, ["Пункт 1", "Пункт 2", "Пункт 3"]) або запитайте їх promptom
створіть список (<ul>) та додайте кожен елемент масиву у вигляді окремого пункту списку
додайте створений список до кінця <body>
 */

function renderListItem(task){
    const listElement = document.getElementById('list');
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `<span>${task}</span>`;
    listElement.append(taskElement);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    taskElement.append(deleteButton);
}

function init(){
    const appElement = document.getElementById('to-do-list-app');
    const tasks = [];

    while (true){
        const task = prompt('What are you going to do today?', ' ');
        if (task === null) break;
        tasks.push(task);
    }
    
    listElement = document.createElement('ul');
    listElement.id = 'list';
    appElement.append(listElement); 
    
    tasks.forEach(task => {
        renderListItem(task);
    });
    
    const addButton = document.createElement('button');
    addButton.innerHTML = '+';
    appElement.append(addButton);

    addButton.addEventListener('click', () => {
        const task = prompt('What are you going to do today?', ' ');
        renderListItem(task);
    });
}


init();

