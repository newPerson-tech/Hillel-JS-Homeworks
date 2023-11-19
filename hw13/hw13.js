/**
 * створіть масив рядків (наприклад, ["Пункт 1", "Пункт 2", "Пункт 3"]) або запитайте їх promptom
створіть список (<ul>) та додайте кожен елемент масиву у вигляді окремого пункту списку
додайте створений список до кінця <body>
 */

const tasksToGo = [];
while(true){
    const task = prompt("Please, set the tesk", " ");
    if(task === null) break;
    tasksToGo.push(task);
}