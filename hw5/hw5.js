function numberFactorial(number){
    for(let i = number - 1; i >=1; i--){
        number = number * i;
    }
    return number;
}
let numberRecieved = prompt("Please, enter any integer from 1 to 50 and we will count its factorial", 0);

alert(`Here we go, factorial of a ${numberRecieved} is ${numberFactorial(numberRecieved)}`);