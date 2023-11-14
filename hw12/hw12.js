/**
 * Напишіть функцію palindrome(str). Поверніть true, якщо заданий рядок є паліндромом. В іншому випадку, поверніть false. Припустимо, що функція на вході отримує одну цілу строку без проміжків та лише з маленькими літерами латинської абетки та цифрами.
 */

function checkPalindrome(str){
    let stringToArr = str.split('');
    let arrReversed = stringToArr.reverse();
    let arrBackToStr = arrReversed.join(''); 

    if(str === arrBackToStr){
        console.log('The string is a palindrome');
    } else{
        console.log('The string is not a palindrome');
    }
}

let inputStr = prompt('Please, enter any string here to check', ' ');
checkPalindrome(inputStr);