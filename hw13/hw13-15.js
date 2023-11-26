/**
 * створіть масив рядків (наприклад, ["Пункт 1", "Пункт 2", "Пункт 3"]) або запитайте їх promptom
створіть список (<ul>) та додайте кожен елемент масиву у вигляді окремого пункту списку
додайте створений список до кінця <body>
 */

const appElement = document.getElementById('to-do-list-app');

const tasks = [];

while (true){
    const task = prompt('What are you going to do today?', ' ');
    if (task === null) break;
    tasks.push(task);
}

listElement = document.createElememnt('ul');

tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = task;
    listElement.append(taskElement);
});

appElement.append(listElement);

