function mathOperationsOnIntegers(num1, num2){
    let additionResult = +num1 + (+num2);
    let substructionResult = +num1 - (+num1);
    let multiplicationResult = +num1 * (+num2);
    let divisionResult = +num1/(+num2);

    alert(`${num1} + ${num2} = ${additionResult}`);
    alert(`${num1} - ${num2} = ${substructionResult}`);
    alert(`${num1} * ${num2} = ${multiplicationResult}`);
    alert(`${num1} / ${num2} = ${divisionResult}`);
}

let firstNumberRecieved = prompt("Please, enter any integer", 0);
let secondNumberRecieved = prompt("Please, enter one more integer", 0);

alert(`You have entered numbers ${firstNumberRecieved} and ${secondNumberRecieved}. Let's do some mathematical operations on them!`);


mathOperationsOnIntegers(firstNumberRecieved, secondNumberRecieved);


