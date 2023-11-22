/**
 * створіть масив рядків (наприклад, ["Пункт 1", "Пункт 2", "Пункт 3"]) або запитайте їх promptom
створіть список (<ul>) та додайте кожен елемент масиву у вигляді окремого пункту списку
додайте створений список до кінця <body>
 */


let tasksInput = prompt("Please, write down a list of tasks to do, separated by commas", " ");
const tasksArray = tasksInput.split(",");


function createToDoList(arr){
    for (let i = 0; i < arr.length; i++ ) {
        const tasksList = document.createElement('ul');
        let task = document.createElement('li');
        task.innerHTML = arr[i];
        tasksList.appendChild(task);
    }
    return tasksList;
}

let bodyPage = createToDoList(tasksArray).body;

console.log(bodyPage);