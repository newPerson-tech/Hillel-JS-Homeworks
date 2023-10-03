let yearRecieved = prompt("Please, enter any year AD: ", 0000);
if (yearRecieved % 400 == 0 || yearRecieved % 4 == 0 && yearRecieved % 100 != 0){
    alert(`Just to let you know, the ${yearRecieved} is a leap year`);
} else{
    alert(`A year you've picked is not a leap year`);
}