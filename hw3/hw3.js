let fingerPointed = +prompt("Please, enter the number of any finger of your hand considering thumb as number 1", 0);

if (fingerPointed == 1){
    alert("You have raised your thumb!");
} else if(fingerPointed == 2){
    alert("You have pointed with a pointer finger! Where is that you say?");
} else if(fingerPointed == 3){
    alert("I'm trying not to get you wrong but it's a middle finger..");
} else if(fingerPointed == 4){
    alert("I'll give you a hint - it's a ring finger! Chin-chin!");
} else if(fingerPointed == 5){
    alert("Who's that little one? Oh, it's a pinky!");
} else{
    alert("Are you sure you have got more fingers on your hand?");
}