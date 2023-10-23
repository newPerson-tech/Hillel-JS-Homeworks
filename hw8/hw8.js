/*Write a function main which recieves parameters a, b, cb. If arguments a & b not passed, consider them as 2 & 3 respectively. 
If argument cb passed as a function the it shoud be called after calling sum() functiob which returns sum of a & b.
*/

function main(a = 2, b = 3, cb){
    if(typeof cb === 'function'){
        return cb(sum(a, b));
    } else{
        return sum(a, b);
    }
}

function sum(a, b){
    return a + b;
}

function cb(message){
    alert(message);
}

main(4, 5, cb);





