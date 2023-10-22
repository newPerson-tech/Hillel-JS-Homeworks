/*Напишіть функцию main (a, b, cb) наступним чином:
Якщо a та b не передані, вони дорівнюють за замовчюванням 2 та 3  відповідно.
Якщо аргумент cb переданий і він є функцією, то він виконується після виклику функції sum(a, b), і як вхідне значення приймає результат роботи функції sum(a, b).
Функція main повинна повертати результат функції аргументу cb, якщо він є, або результат функції sum(a, b)
В якості колбеку можно  використовувати функцію, яка виводить результат результат роботи функції sum(a, b) в алерт
*/

function main(a, b, cb){
   if (a === undefined){
    a = 2;
   } else if(b === undefined){
    b = 3;
   } else if(cb !== undefined){
    cb = sum;
   }
}

function sum(a, b, myCallBack){
    let sum = a+ b;
    return sum;
    myCallBack(sum);
}

function showMessage(a, b, sum){
    alert(`The summ of ${a} and ${b} is ${sum}`);
}

console.log(sum(showMessage));





