/**
 * Create a function that looks for every item in array and changes it to new element
 */

let arrayInitial = ['first', 'second', 'third', 'forth', 'fifth' ];
let elementToFind = 'second';
let elementToReplace = 2;

function removeElement(array, item, newElement){
    let arrayChanged = [];
    for (let i = 0; i < array.length; i++){
        if( array[i] === item){
            array[i] = newElement;
        } else{
            arrayChanged.push(i);
        }
    } 
    return arrayChanged;
}

removeElement(arrayInitial, elementToFind, elementToReplace);
console.log(arrayInitial);