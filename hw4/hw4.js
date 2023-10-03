let yearRecieved = prompt("Please, enter any year AD: ", 0000);

let messageLeapYear = `Just to let you know, ${yearRecieved} is a leap year`;
let messageYearNotLeap = `You have picked a year which is not leap`;

yearRecieved % 400 == 0 || (yearRecieved % 4 == 0 && yearRecieved % 100 != 0) ? alert(messageLeapYear) : alert (messageYearNotLeap);