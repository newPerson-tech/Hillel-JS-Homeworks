let arrayInitial = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];


function checkFalseyValues(arr){
    let arrayUpdated = [];
    arr.forEach((i) => {
        if(i) {
            arrayUpdated.push(i);
        }
    });
    return arrayUpdated;
}

console.log(checkFalseyValues(arrayInitial));