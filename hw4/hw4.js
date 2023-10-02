let yearRecieved = prompt("Please, enter any year AD: ", 0000);

let messageForLeapYear = `Just to let you know, the ${yearRecieved} is a leap year`;
let messageForNotLeapYear = `A year you've picked is not a leap year`; 

yearRecieved % 400 == 0 || (yearRecieved % 4 == 0 && yearRecieved % 100 != 0) ? alert(messageForLeapYear) : alert(messageForNotLeapYear);

